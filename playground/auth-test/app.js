const express = require('express'),
	ejsMate = require('ejs-mate'),
	mongoose = require('mongoose'),
	session = require('express-session'),
	passport = require('passport'),
	passportLocal = require('passport-local'),
	bodyParser = require('body-parser'),
	User = require('./user');

mongoose.connect('mongodb://localhost:27017/auth-test', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('DB connected!');
});

const app = express();
const sessionConfig = {
	secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}

// use ejs-locals for all ejs templates:
app.engine('ejs', ejsMate);
 
app.set('views', __dirname);
app.set('view engine', 'ejs'); // so you can render('index')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/register', (req, res, next) =>{
	res.render('register');
})
app.post('/register', async (req, res, next) =>{
	const user = new User({username: req.body.username});
	const registeredUser = await User.register(user, req.body.password);
	res.send(registeredUser);
})
app.get('/login', (req, res, next) =>{
	res.render('login');
})
app.post('/login', 
	passport.authenticate('local'),
	async (req, res, next) =>{
		res.send('logged in');
	}
);

// passport.use(new passportLocal(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

app.listen(3000, ()=>{
	console.log('Listen to server on port 3000');
});