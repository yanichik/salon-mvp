// Refactor: divide between external lib imports, local libs, and initializations
/*START INCLUSIONS*/
const express = require('express'),
	app = express(),
	ejsMate = require('ejs-mate'),  // includes layout, partial, & block template functions for view engine
	path = require('path'),
	port = process.env.PORT || 3000,  // port defined in .env file or localhost:3000
	mongoose = require('mongoose'),
	{singleTransaction, manyTransactions, sortedAllTransactions} = require('./seeds/transactions'),
	{ownerSample} = require('./seeds/users'),
	Transaction = require('./models/transaction'),
	User = require('./models/user'),
	sortTransactions = require('./utils/sortTransactions'),
	methodOverride = require('method-override'),
	cookieParser = require('cookie-parser'),
	setDateByViewType = require('./utils/setDateByViewType'),
	setDateAtFirstVisit = require('./utils/setDateAtFirstVisit'),
	setDateByPrevOrNext = require('./utils/setDateByPrevOrNext'),
	session = require('express-session'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	flash = require('connect-flash'),
	{isLoggedIn} = require('./middleware');
/*END INCLUSIONS*/

// START INCLUDE ROUTES
const userRoutes = require('./routes/userRoutes');
// END INCLUDE ROUTES

/*START MONGOOSE SETUP*/
mongoose.connect('mongodb://localhost:27017/salon-mvp', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Mongoose connected")
});
/*END MONGOOSE SETUP*/

/*START SETS*/
app.engine('ejs', ejsMate);  // sets the ejsMate function to render all ejs files
app.set('view engine', 'ejs');  // sets the view engine to ejs
app.set('views', path.join(__dirname, 'views'));  // sets default directory for all static views
/*END SETS*/

/*START USES*/
app.use(flash());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));  // sets default directory 'public' to serve all static assets
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Cookie Config Start
app.use(cookieParser());
const sessionConfig = {
	cookie: {
		httpOnly: true
	},
  secret: 'user-register',
  resave: false,
  saveUninitialized: true
}
app.use(session(sessionConfig));
// Cookie Config End
// Flash start
app.use( (req, res, next) =>{
	res.locals.success = req.flash('success');
	res.locals.error = req.flash('error');
	res.locals.url = req.originalUrl;
	res.locals.isClient = isClient = 0;
	res.locals.isOwner = isOwner = 1;
	next();
})
// Flash end

// Passport Config Start
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Passport Config End
/*END USES*/

/*START ROUTES*/

// User Routes Start
app.use('/', userRoutes);
// User Routes End

// Dashboard Redirect Start 
app.get('/dashboard', isLoggedIn, (req, res, next) => {
	if (isOwner) {
		res.redirect('owner/transactions/new');
	}
	if (isClient) {
		res.redirect('client/transactions/new');
	}
})
// Dashboard Redirect End

// Owner Routes Start
app.get('/owner/transactions/new', isLoggedIn, async (req, res, next) =>{
	res.render('dashboards/owner/transactions/new');
})

// Option 1: use GET method to pass in user's date range to view Reports
// LOOK INTO: underscore or lodash util libs 
// NEED TO ADD: datepicker
app.get('/owner/transactions', isLoggedIn, async (req, res, next) => {
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
// app.put('/owner/transactions', async (req, res, next) => {
// 	const {startDate, endDate} = req.body;
// 	const seededTransactions = await Transaction.find({});
// 	const sortedTransactions = sortTransactions(seededTransactions, startDate, endDate);
// 	res.render('dashboards/owner/transactions/index', {sortedTransactions, startDate, endDate});
// 	// res.send(req.body);
// })

app.post('/owner/transactions', isLoggedIn, async (req, res, next) => {
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

app.get('/owner/transactions/:id', async (req, res, next) => {
	// console.log(req.params['id'])
	const transaction = await Transaction.findById(req.params['id'])
	// res.render('dashboards/owner/transactions/show', {singleTransaction});
	res.render('dashboards/owner/transactions/show', {transaction});
})

app.get('/owner/transactions/:id/edit', async (req, res, next) => {
	// console.log(req.params['id'])
	const transaction = await Transaction.findById(req.params['id'])
	res.render('dashboards/owner/transactions/edit', {transaction});
})

app.put('/owner/transactions/:id', async (req, res, next) => {
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

app.delete('/owner/transactions/:id', isLoggedIn, async (req, res, next) => {
	const transaction = await Transaction.findByIdAndRemove(req.params.id, (e, doc)=>{
		if(e) {
			console.log(e);
		}else {
			console.log('Removed transaction:', doc);
		}
	});
	res.redirect('/owner/transactions');
})

app.get('/owner/profile', isLoggedIn, async (req, res, next) => {
	res.render('dashboards/owner/profile/show', {ownerSample});
})

app.post('/owner/profile', isLoggedIn, async (req, res, next) => {
	// res.render('dashboards/owner/profile/show', {ownerSample});
	res.send('Edit Profile Here')
})

app.get('/owner/profile/edit', isLoggedIn, async (req, res, next) => {
	res.render('dashboards/owner/profile/edit', {ownerSample});
})

app.delete('/owner/profile', isLoggedIn, async (req, res, next) => {
	console.log('Deleting Profile');
	res.redirect('/register');
})
// Owner Routes End

/*END ROUTES*/

/*START LISTEN @ ROUTER*/
app.listen(port, ()=>{
	console.log(`Listening on Port ${port}`);
})
/*END LISTEN @ ROUTER*/







