/*START INCLUSIONS*/
const express = require('express'),
	app = express(),
	ejsMate = require('ejs-mate'),  // includes layout, partial, & block template functions for view engine
	path = require('path'),
	port = process.env.PORT || 3000,  // port defined in .env file or localhost:3000
	mongoose = require('mongoose');
/*END INCLUSIONS*/

/*START MONGOOSE SETUP*/
mongoose.connect('mongodb://localhost/salon-mvp', {
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
app.use(express.static(path.join(__dirname, 'public')));  // sets default directory 'public' to serve all static assets
app.use(express.urlencoded({extended: true}));	//
app.use( (req, res, next) =>{
	res.locals.url = req.originalUrl;
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

app.get('/register', async(req, res, next) => {
	res.render('users/register');
})

app.post('/register', async(req, res, next) => {
	console.log(req.body);
	res.send(req.body);
})
/*END ROUTES*/

/*START LISTEN @ ROUTER*/
app.listen(port, ()=>{
	console.log(`Listening on Port ${port}`);
})
/*END LISTEN @ ROUTER*/