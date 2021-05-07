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
	methodOverride = require('method-override');
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

app.get('/dashboard', (req, res, next) => {
	if (isOwner) {
		res.redirect('owner/transactions/new');
	}
	if (isClient) {
		res.redirect('client/transactions/new');
	}
})

// Owner Routes Start
app.get('/owner/transactions/new', async (req, res, next) =>{
	res.render('dashboards/owner/transactions/new');
})

app.post('/owner/transactions', async (req, res, next) => {
	// temp routing to show a single mock transaction
	res.render('dashboards/owner/transactions/show', {singleTransaction});
})

app.get('/owner/transactions', async (req, res, next) => {
	const seededTransactions = await Transaction.find({});
	const days2Sort = 365;
	const startDate = '5/5/19';
	const endDate = '12/31/20';
	// const sortedTransactionsByDays = sortTransactions(seededTransactions, days2Sort);
	const sortedTransactions = sortTransactions(seededTransactions, startDate, endDate);
	// console.log(sortedTransactionsByDays);
	// res.send(sortedTransactionsByDays[0]);
	// res.render('dashboards/owner/transactions/index', {sortedTransactionsByDays, days2Sort});
	// res.render('dashboards/owner/transactions/index', {sortedTransactionsByDays, startDate, endDate});
	res.render('dashboards/owner/transactions/index', {sortedTransactions, startDate, endDate});
})

app.put('/owner/transactions', async (req, res, next) => {
	const {startDate, endDate} = req.body;
	const seededTransactions = await Transaction.find({});
	const sortedTransactions = sortTransactions(seededTransactions, startDate, endDate);
	res.render('dashboards/owner/transactions/index', {sortedTransactions, startDate, endDate});
	// res.send(req.body);
})

app.get('/owner/transactions/:id', async (req, res, next) => {
	res.render('dashboards/owner/transactions/show', {singleTransaction});
	// res.render('dashboards/owner/transactions/show', {transactions});
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







