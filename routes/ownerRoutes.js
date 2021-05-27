const express = require('express'),
	router = express.Router(),
	User = require('../models/user'),
	passport = require('passport'),
	setDateByViewType = require('../utils/setDateByViewType'),
	setDateAtFirstVisit = require('../utils/setDateAtFirstVisit'),
	setDateByPrevOrNext = require('../utils/setDateByPrevOrNext'),
	sortTransactions = require('../utils/sortTransactions'),
	Transaction = require('../models/transaction'),
	{ownerSample} = require('../seeds/users'),
	{singleTransaction, manyTransactions, sortedAllTransactions} = require('../seeds/transactions'),
	{isLoggedIn} = require('../middleware');

// Owner Routes Start
router.get('/transactions/new', isLoggedIn, async (req, res, next) =>{
	res.render('dashboards/owner/transactions/new');
})

// Option 1: use GET method to pass in user's date range to view Reports
// LOOK INTO: underscore or lodash util libs 
// NEED TO ADD: datepicker
router.get('/transactions', isLoggedIn, async (req, res, next) => {
	if (!Object.keys(req.query).length) {
		res.cookie('viewType', 'all');
	}else if(req.query.viewType != undefined){
		res.cookie('viewType', req.query.viewType);
	}

// Default Dates Start: when first opening reports, sets defaults to view all transactions
	let {startDate, endDate} = req.cookies;
	// if startDate left blank, set to start of 1900
	[startDate, endDate] = setDateAtFirstVisit(startDate, endDate)
	// endDate = setDateAtFirstVisit(startDate, endDate)[1];
// Default Dates End

// Toggle View Start: toggle between 30-day, monthly, or all transactions views
// setDateByViewType function: checks if user toggled any of these by checking the query
	let {viewType, prevOrNext} = req.query;
	startDate = setDateByViewType(req.cookies, viewType, startDate, endDate)[0];
	endDate = setDateByViewType(req.cookies, viewType, startDate, endDate)[1];
	// console.log(startDate, endDate);
// Toggle View End

	res.cookie('startDate', startDate);
	res.cookie('endDate', endDate);

// Prev or Next Start: handles dates based on queries of prev or next by user
	[startDate, endDate] = setDateByPrevOrNext(req.query, req.cookies, startDate, endDate);
	res.cookie('startDate', startDate);
	res.cookie('endDate', endDate);
// Prev or Next End

	// filter inside mongoDB & return filtered + sorted (descending) data per user's date range input
	let sortedTransactions = await Transaction.find({
    date: {
        $gte: new Date(startDate),
        $lt:  new Date(endDate)
    }
	}).sort({
		date: -1
	})
	// if startDate is left blank pass in the date of the first transaction
	// benefits user: date is informative and not arbitrary
	if (sortedTransactions.length > 0 && startDate === '1/1/1900') {
		startDate = sortedTransactions[sortedTransactions.length-1].date.toLocaleString().split(',')[0];
		res.cookie('startDate', startDate);
	}
	res.render('dashboards/owner/transactions/index', {sortedTransactions, startDate, endDate});
})

// Option 2: use PUT method to pass in user's date range to view Reports
// router.put('/transactions', async (req, res, next) => {
// 	const {startDate, endDate} = req.body;
// 	const seededTransactions = await Transaction.find({});
// 	const sortedTransactions = sortTransactions(seededTransactions, startDate, endDate);
// 	res.render('dashboards/owner/transactions/index', {sortedTransactions, startDate, endDate});
// 	// res.send(req.body);
// })

router.post('/transactions', isLoggedIn, async (req, res, next) => {
	const transaction = new Transaction({
		owner: req.body.owner,
		client: req.body.client,
		salon: req.body.salon,
		date:	req.body.date,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		transactionNotes: req.body.transactionNotes,
		lineItems: req.body.lineItemContent.map(function (content, index){
   		return {lineItemContent: content, 
   		lineItemType: req.body.lineItemType[index], 
   		lineItemValue: req.body.lineItemValue[index]}
   	}),
		total: req.body.lineItemValue.reduce((acc, v) => {
				return acc + parseInt(v);
			}, 0)
	})
	await transaction.save();
	res.render('dashboards/owner/transactions/show', {transaction});
})

router.get('/transactions/:id', async (req, res, next) => {
	// console.log(req.params['id'])
	const transaction = await Transaction.findById(req.params['id'])
	// res.render('dashboards/owner/transactions/show', {singleTransaction});
	res.render('dashboards/owner/transactions/show', {transaction});
})

router.get('/transactions/:id/edit', async (req, res, next) => {
	// console.log(req.params['id'])
	const transaction = await Transaction.findById(req.params['id'])
	res.render('dashboards/owner/transactions/edit', {transaction});
})

router.put('/transactions/:id', async (req, res, next) => {
	// console.log(typeof req.params.id);
	const transaction = await Transaction.findByIdAndUpdate(req.params.id, {
		owner: req.body.owner,
		client: req.body.client,
		salon: req.body.salon,
		date:	req.body.date,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		transactionNotes: req.body.transactionNotes,
		lineItems: req.body.lineItemContent.map(function (content, index){
   		return {lineItemContent: content, 
   		lineItemType: req.body.lineItemType[index], 
   		lineItemValue: req.body.lineItemValue[index]}
   	}),
		total: req.body.lineItemValue.reduce((acc, v) => {
				return acc + parseInt(v);
			}, 0)
	})
	// console.log(transaction);
	await transaction.save();
	res.redirect(`${req.params.id}`);
})

router.delete('/transactions/:id', isLoggedIn, async (req, res, next) => {
	const transaction = await Transaction.findByIdAndRemove(req.params.id, (e, doc)=>{
		if(e) {
			console.log(e);
		}else {
			console.log('Removed transaction:', doc);
		}
	});
	res.redirect('/owner/transactions');
})

router.get('/profile', isLoggedIn, async (req, res, next) => {
	res.render('dashboards/owner/profile/show', {ownerSample});
})

router.post('/profile', isLoggedIn, async (req, res, next) => {
	// res.render('dashboards/owner/profile/show', {ownerSample});
	res.send('Edit Profile Here')
})

router.get('/profile/edit', isLoggedIn, async (req, res, next) => {
	res.render('dashboards/owner/profile/edit', {ownerSample});
})

router.delete('/profile', isLoggedIn, async (req, res, next) => {
	console.log('Deleting Profile');
	res.redirect('/register');
})
// Owner Routes End

module.exports = router;