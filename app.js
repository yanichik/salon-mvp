// Refactor: divide between external lib imports, local libs, and initializations

/*START IMPORTS*/
	// Start External Imports
	const express = require('express'),
		ejsMate = require('ejs-mate'),  // includes layout, partial, & block template functions for view engine
		path = require('path'),
		mongoose = require('mongoose'),
		methodOverride = require('method-override'),
		cookieParser = require('cookie-parser'),
		session = require('express-session'),
		passport = require('passport'),
		LocalStrategy = require('passport-local').Strategy,
		flash = require('connect-flash');
	// End External Imports

	// Start Local Imports
	const {singleTransaction, manyTransactions, sortedAllTransactions} = require('./seeds/transactions'),
		Transaction = require('./models/transaction'),
		User = require('./models/user'),
		sortTransactions = require('./utils/sortTransactions'),
		setDateByViewType = require('./utils/setDateByViewType'),
		setDateAtFirstVisit = require('./utils/setDateAtFirstVisit'),
		setDateByPrevOrNext = require('./utils/setDateByPrevOrNext'),
		{isLoggedIn} = require('./middleware');
	// End Local Imports

	// Start Initializations
		const port = process.env.PORT || 3000,  // port defined in .env file or localhost:3000
			app = express();
	// End Initializations

	// End route imports
		const userRoutes = require('./routes/userRoutes');
		const ownerRoutes = require('./routes/ownerRoutes');
	// End route imports
/*END IMPORTS*/

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
	app.use(express.static('public'));
	app.use(flash());
	app.use(methodOverride('_method'));
	app.use(express.static(path.join(__dirname, 'public')));  // sets default directory 'public' to serve all static assets
	app.use(express.urlencoded({extended: true}));
	app.use(express.json());
	// Start Cookie Config
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
	// End Cookie Config

	// Start Passport Config
		app.use(passport.initialize());
		app.use(passport.session());
		passport.use(User.createStrategy());
		passport.serializeUser(User.serializeUser());
		passport.deserializeUser(User.deserializeUser());
	// EndPassport Config
/*END USES*/

/*START SET LOCALS FOR STATIC PAGES*/
	app.use( (req, res, next) =>{
		res.locals.loggedInUser = req.user;
		res.locals.success = req.flash('success');
		res.locals.error = req.flash('error');
		res.locals.url = req.originalUrl;
		res.locals.isClient = isClient = 0;
		res.locals.isOwner = isOwner = 1;
		next();
	})
/*END SET LOCALS*/

/*START ROUTES*/
	// Start User Routes
		app.use('/', userRoutes);
	// End User Routes

	// Start Dashboard Redirect
		app.get('/dashboard', isLoggedIn, (req, res, next) => {
			if (isOwner) {
				res.redirect('owner/transactions/new');
			}
			if (isClient) {
				res.redirect('client/transactions/new');
			}
		});
	// End Dashboard Redirect

	// Start Owner Routes
		app.use('/owner', ownerRoutes);
	// End Owner Routes
/*END ROUTES*/

/*START LISTEN @ ROUTER*/
	app.listen(port, ()=>{
		console.log(`Listening on Port ${port}`);
	});
/*END LISTEN @ ROUTER*/







