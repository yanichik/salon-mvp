const express = require('express'),
	router = express.Router(),
	User = require('../models/user'),
	passport = require('passport');

router.get('/', async (req, res, next)=>{
	res.redirect('login');
});

router.get('/login', async (req, res, next)=>{
	res.render('users/login');
});

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), (req, res, next)=>{
	req.flash('success', 'Welcome back!');
	res.redirect('/owner/transactions/new');
});

router.get('/register', async(req, res, next) => {
	res.render('users/register');
});

router.post('/register', async(req, res, next) => {
	const {userType, firstName, lastName, email, phone, businessName, businessAddress, password, passwordRepeat} = req.body;
	if (password.length && (password === passwordRepeat)) {
		User.register(
			new User({userType, firstName, lastName, email, phone, businessName, businessAddress}),
			req.body.password,
			function(e, user){
				if(e){
					console.log(e);
					console.log('something');
					req.flash('error', "something's wrong");
					return res.redirect('register')
				}
				passport.authenticate('local')(req, res, ()=>{
					res.redirect('dashboard');
				});
			}
		);
	}
});

router.get('/logout', (req, res, next)=>{
	req.logout();
	req.flash('success', 'Successfully logged out. See you next time!');
	res.redirect('login');
});

module.exports = router;