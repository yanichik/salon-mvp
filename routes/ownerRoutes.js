const express = require("express"),
	router = express.Router(),
	User = require("../models/user"),
	passport = require("passport"),
	setDateByViewType = require("../utils/setDateByViewType"),
	setDateAtFirstVisit = require("../utils/setDateAtFirstVisit"),
	setDateByPrevOrNext = require("../utils/setDateByPrevOrNext"),
	sortTransactions = require("../utils/sortTransactions"),
	Transaction = require("../models/transaction"),
	{ ownerSample } = require("../seeds/users/ownerSample"),
	typeAhead = require("../utils/typeAhead"),
	si = require("search-index"),
	{ isLoggedIn } = require("../middleware");

// Owner Routes Start
router.get("/transactions/new", isLoggedIn, async (req, res, next) => {
	// console.log(req.session.passport.user)
	const user = await User.findOne({ email: req.session.passport.user });
	res.render("dashboards/owner/transactions/new", { user });
});

router.post("/transactions", isLoggedIn, async (req, res, next) => {
	const user = await User.findOne({ email: req.session.passport.user });
	const transaction = new Transaction({
		owner: user._id,
		client: req.body.client,
		salon: `${user.businessName}`,
		date: req.body.date,
		transactionNotes: req.body.transactionNotes,
		lineItems: req.body.lineItemContent.map(function (content, index) {
			return {
				lineItemContent: content,
				lineItemType: req.body.lineItemType[index],
				lineItemValue:
					req.body.lineItemType[index] === "expense"
						? Math.abs(req.body.lineItemValue[index]) * -1
						: req.body.lineItemValue[index],
			};
		}),
		total: req.body.lineItemValue.reduce((acc, v) => {
			return acc + parseInt(v);
		}, 0),
	});
	console.log(transaction);
	await transaction.save();
	req.flash("success", "Successfully created new transaction.");
	res.redirect(`transactions/${transaction._id}`);
});

let cookieOptions = { sameSite: "Lax" };
// let cookieOptions = {secure: true, sameSite: "Lax"};
let setCookie = (res, key, value, options) => {
	res.cookie(key, value, options);
};
router.get("/transactions", isLoggedIn, async (req, res, next) => {
	// TODO: set cookies upon login & remove logic statements
	if (!Object.keys(req.query).length) {
		setCookie(res, "viewType", "all", cookieOptions);
	} else if (req.query.viewType != undefined) {
		res.cookie("viewType", req.query.viewType, cookieOptions);
	} else if (req.query.client != undefined) {
		if (req.query.client == "") {
			setCookie(res, "clientName", "all", cookieOptions);
		} else {
			setCookie(res, "clientName", req.query.client, cookieOptions);
		}
	}
	// console.log(req.query.client);
	const user = await User.findOne({ email: req.session.passport.user });

	// fuzzy search using search-index
	let allTransactions = await Transaction.find({
		owner: user._id,
	});
	// create full client list to pull from during search
	let clientNames = [];
	allTransactions.forEach((transaction) => {
		clientNames.push(transaction.client);
	});

	let sortedTransactions;
	// Default Dates Start: when first opening reports, sets defaults to view all transactions
	let { startDate, endDate } = req.cookies;
	// if startDate left blank, set to start of 1900
	[startDate, endDate] = setDateAtFirstVisit(startDate, endDate);
	// endDate = setDateAtFirstVisit(startDate, endDate)[1];
	// Default Dates End

	// Toggle View Start: toggle between 30-day, monthly, or all transactions views
	// setDateByViewType function: checks if user toggled any of these by checking the query
	let { viewType, prevOrNext } = req.query;
	let clientName = req.query.client;

	startDate = setDateByViewType(req.cookies, viewType, startDate, endDate)[0];
	endDate = setDateByViewType(req.cookies, viewType, startDate, endDate)[1];
	// Toggle View End

	res.cookie("startDate", startDate, { sameSite: "Lax" });
	// res.cookie('startDate', startDate, {secure: true, sameSite: "Lax"});
	res.cookie("endDate", endDate, { sameSite: "Lax" });
	// res.cookie('endDate', endDate, {secure: true, sameSite: "Lax"});

	// Prev or Next Start: handles dates based on queries of prev or next by user
	[startDate, endDate] = setDateByPrevOrNext(
		req.query,
		req.cookies,
		startDate,
		endDate
	);
	res.cookie("startDate", startDate, { sameSite: "Lax" });
	// res.cookie('startDate', startDate, {secure: true, sameSite: "Lax"});
	res.cookie("endDate", endDate, { sameSite: "Lax" });
	// res.cookie('endDate', endDate, {secure: true, sameSite: "Lax"});
	// Prev or Next End

	// filter inside mongoDB & return filtered + sorted (descending) data per user's date range input
	if (req.query.client != undefined && req.query.client != "all") {
		clientName = req.query.client;
	} else if (
		req.cookies.clientName != undefined &&
		req.cookies.clientName != "all" &&
		req.query.client != "all"
	) {
		clientName = req.cookies.clientName;
	} else {
		clientName = "all";
		res.cookie("clientName", "all", { sameSite: "Lax" });
		// res.cookie('clientName', 'all', {secure: true, sameSite: "Lax"});
	}
	// if client filter left blank, default to all transactions
	if (clientName == "") {
		clientName = "all";
	}
	if (clientName != undefined && clientName != "all") {
		sortedTransactions = await Transaction.find({
			client: clientName,
			owner: user._id,
			date: {
				$gte: new Date(startDate).setUTCHours(0, 0, 0, 0),
				$lt: new Date(endDate).setUTCHours(23, 59, 59, 999),
			},
		}).sort({
			date: -1,
		});
	} else {
		sortedTransactions = await Transaction.find({
			owner: user._id,
			date: {
				$gte: new Date(startDate).setUTCHours(0, 0, 0, 0),
				$lt: new Date(endDate).setUTCHours(23, 59, 59, 999),
			},
		}).sort({
			date: -1,
		});
	}

	let viewProfit = sortedTransactions.reduce((acc, v) => {
		return acc + v.total;
	}, 0);

	// revenue & expenses totals to be able to display in index page
	let viewRevs = 0;
	sortedTransactions.forEach((item) => {
		let totRevSingleTransaction = 0;
		totRevSingleTransaction = item.lineItems.reduce((acc, v, ind) => {
			return v.lineItemType === "product/service" ? acc + v.lineItemValue : acc;
		}, 0);
		viewRevs += totRevSingleTransaction;
	});

	let viewExps = 0;
	sortedTransactions.forEach((item) => {
		let totExpSingleTransaction = 0;
		totExpSingleTransaction = item.lineItems.reduce((acc, v, ind) => {
			return v.lineItemType === "expense" ? acc + v.lineItemValue : acc;
		}, 0);
		viewExps += totExpSingleTransaction;
	});

	// if startDate is left blank pass in the date of the first transaction
	// benefits user: date is informative and not arbitrary
	if (sortedTransactions.length > 0 && startDate === "1/1/1900") {
		startDate = sortedTransactions[sortedTransactions.length - 1].date
			.toLocaleString()
			.split(",")[0];
		res.cookie("startDate", startDate, { sameSite: "Lax" });
		// res.cookie('startDate', startDate, {secure: true, sameSite: "Lax"});
	}
	let viewType4Format = viewType || req.cookies.viewType;
	res.render("dashboards/owner/transactions/index", {
		viewRevs,
		viewExps,
		viewProfit,
		clientNames,
		clientName,
		user,
		allTransactions,
		sortedTransactions,
		startDate,
		endDate,
		viewType4Format,
	});
});

router.get("/transactions/:id", isLoggedIn, async (req, res, next) => {
	const transaction = await Transaction.findById(req.params["id"]).populate(
		"owner"
	);
	// res.send(transaction);
	res.render("dashboards/owner/transactions/show", { transaction });
});

router.get("/transactions/:id/edit", async (req, res, next) => {
	const user = await User.findOne({ email: req.session.passport.user });
	const transaction = await Transaction.findById(req.params["id"]).populate(
		"owner"
	);
	res.render("dashboards/owner/transactions/edit", { transaction, user });
});

router.put("/transactions/:id", async (req, res, next) => {
	const transaction = await Transaction.findByIdAndUpdate(req.params.id, {
		client: req.body.client,
		date: req.body.date,
		transactionNotes: req.body.transactionNotes,
		lineItems: req.body.lineItemContent.map(function (content, index) {
			return {
				lineItemContent: content,
				lineItemType: req.body.lineItemType[index],
				lineItemValue: req.body.lineItemValue[index],
			};
		}),
		total: req.body.lineItemValue.reduce((acc, v) => {
			return acc + parseInt(v);
		}, 0),
	});
	await transaction.save();
	req.flash("success", "Successfully edited transaction.");
	res.redirect(`${req.params.id}`);
});

router.delete("/transactions/:id", isLoggedIn, async (req, res, next) => {
	const transaction = await Transaction.findByIdAndRemove(
		req.params.id,
		(e, doc) => {
			if (e) {
				console.log(e);
			} else {
				console.log("Removed transaction:", doc);
			}
		}
	);
	req.flash("success", "Successfully deleted transaction.");
	res.redirect("/owner/transactions");
});

router.get("/profile", isLoggedIn, async (req, res, next) => {
	const user = await User.findOne({ email: req.session.passport.user });
	res.render("dashboards/owner/profile/show", { user });
});

router.put("/profile", isLoggedIn, async (req, res, next) => {
	const user = await User.findOne({ email: req.session.passport.user });
	const password = req.body.password;
	const passwordRepeat = req.body.passwordRepeat;
	await User.findOneAndUpdate(
		{ email: req.session.passport.user },
		{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phone: req.body.phone,
			businessName: req.body.businessName,
			businessAddress: req.body.businessAddress,
			email: req.body.email,
		}
	);
	console.log(user);
	if (password.length && password === passwordRepeat) {
		user.changePassword(req.body.currentPassword, password, function (err, u) {
			if (err) {
				console.log(err);
			}
		});
	}
	await User.authenticate("local")(req.body.email, password);
	res.redirect("/owner/profile");
});

router.get("/profile/edit", isLoggedIn, async (req, res, next) => {
	const user = await User.findOne({ email: req.session.passport.user });
	res.render("dashboards/owner/profile/edit", { user });
});

router.delete("/profile", isLoggedIn, async (req, res, next) => {
	const user = await User.findOneAndRemove({
		email: req.session.passport.user,
	});
	res.redirect("/register");
});
// Owner Routes End

module.exports.ownerRoutes = router;
