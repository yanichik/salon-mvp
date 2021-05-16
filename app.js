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
	Transaction = require('./models/transaction')
	sortTransactions = require('./utils/sortTransactions'),
	methodOverride = require('method-override'),
	cookieParser = require('cookie-parser');
/*END INCLUSIONS*/

/*START MONGOOSE SETUP*/
mongoose.connect('mongodb://localhost:27017/salon-mvp', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false});

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
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));  // sets default directory 'public' to serve all static assets
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use( (req, res, next) =>{
	res.locals.url = req.originalUrl;
	res.locals.isClient = isClient = 0;
	res.locals.isOwner = isOwner = 1;
	next();
})
app.use(cookieParser());
// app.use(express.json());
/*END USES*/

/*START ROUTES*/
app.get('/', async (req, res, next)=>{
	res.redirect('login');
})

app.get('/login', async (req, res, next)=>{
	res.render('users/login');
})

// User Routes Start
app.get('/register', async(req, res, next) => {
	res.render('users/register');
})

app.post('/register', async(req, res, next) => {
	const {userType, firstName, lastName, email, phoneNumber, businessName, businessAddress} = req.body;
	const user = new User({})
	console.log(req.body);
	res.send(req.body);
})
// User Routes End

// Dashboard Redirect Start 
app.get('/dashboard', (req, res, next) => {
	if (isOwner) {
		res.redirect('owner/transactions/new');
	}
	if (isClient) {
		res.redirect('client/transactions/new');
	}
})
// Dashboard Redirect End

// Owner Routes Start
app.get('/owner/transactions/new', async (req, res, next) =>{
	res.render('dashboards/owner/transactions/new');
})

// Option 1: use GET method to pass in user's date range to view Reports
// LOOK INTO: underscore or lodash util libs 
// NEED TO ADD: datepicker
app.get('/owner/transactions', async (req, res, next) => {
	if (req.query.viewType != undefined) {
		res.cookie('viewType', req.query.viewType);
	}	
// Default Dates Start: when first opening reports, sets defaults to view all transactions
	let {startDate, endDate} = req.cookies;
	// if startDate left blank, set to start of 1900
	if (!startDate ){
		startDate = '1/1/1900';
	}
	// if endDate left blank, set to today's date
	if (!endDate) {
		endDate = new Date().toLocaleString().split(',')[0];
	}
// Default Dates End


	console.log(req.cookies);
	console.log(req.query);

// Toggle View Start: toggle between 30-day & monthly views
	let {viewType, prevOrNext} = req.query;
	// if viewType is 'thirty-day', reset to view last 30 days
	if (req.cookies.viewType === "thirty-day" || viewType === "thirty-day"){
		startDate = new Date(new Date().valueOf() - 30*24*60*60*1000).toLocaleString().split(',')[0]
		endDate = new Date().toLocaleString().split(',')[0];
	}
	// if viewType is 'monthly', reset to view this month
	if (req.cookies.viewType === "monthly" || viewType === "monthly") {
		startDate = new Date(new Date().valueOf() - ((new Date()).getDate()-1)*24*60*60*1000).toLocaleString().split(',')[0]
		endDate = new Date().toLocaleString().split(',')[0];
	}
	// if viewType is 'all', reset to view all
	if (viewType != 'monthly' && viewType != 'thirty-day' && (req.cookies.viewType === "all" || req.cookies.viewType === 'undefined')) {
		startDate = '1/1/1900';
		endDate = new Date().toLocaleString().split(',')[0];
	}
// Toggle View End
	console.log(startDate, endDate)
	res.cookie('startDate', startDate);
	res.cookie('endDate', endDate);

	if (prevOrNext === 'next' && (req.cookies.viewType === 'monthly' || req.cookies.viewType === 'thirty-day')) {
		startDate = new Date((new Date(req.cookies.startDate)).valueOf() + 30*24*60*60*1000).toLocaleString().split(',')[0]
		endDate = new Date((new Date(req.cookies.endDate)).valueOf() + 30*24*60*60*1000).toLocaleString().split(',')[0]
		res.cookie('startDate', startDate);
		res.cookie('endDate', endDate);
	}

	if (prevOrNext === 'prev' && (req.cookies.viewType === 'monthly' || req.cookies.viewType === 'thirty-day')) {
		startDate = new Date((new Date(req.cookies.startDate)).valueOf() - 30*24*60*60*1000).toLocaleString().split(',')[0]
		endDate = new Date((new Date(req.cookies.endDate)).valueOf() - 30*24*60*60*1000).toLocaleString().split(',')[0]
		res.cookie('startDate', startDate);
		res.cookie('endDate', endDate);
	}

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
	if (startDate === '1/1/1900') {
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

app.post('/owner/transactions', async (req, res, next) => {
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

app.get('/owner/profile', async (req, res, next) => {
	res.render('dashboards/owner/profile/show', {ownerSample});
})

app.post('/owner/profile', async (req, res, next) => {
	// res.render('dashboards/owner/profile/show', {ownerSample});
	res.send('Edit Profile Here')
})

app.get('/owner/profile/edit', async (req, res, next) => {
	res.render('dashboards/owner/profile/edit', {ownerSample});
})
// Owner Routes End

/*END ROUTES*/

/*START LISTEN @ ROUTER*/
app.listen(port, ()=>{
	console.log(`Listening on Port ${port}`);
})
/*END LISTEN @ ROUTER*/







