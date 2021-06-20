const express = require('express'),
	router = express.Router(),
	User = require('../models/user'),
	passport = require('passport'),
	catchAsync = require('../utils/catchAsync');

router.get('/', async (req, res, next)=>{
	res.redirect('login');
});

router.get('/login', async (req, res, next)=>{
	res.render('users/login');
});

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), (req, res, next)=>{
	let returnToUrl = req.session.returnToUrl || '/owner/transactions/new';
	delete req.session.returnToUrl;
	res.clearCookie('clientName');
	req.flash('success', 'Welcome back!');
	res.redirect(returnToUrl);
});

router.get('/register', async(req, res, next) => {
	res.render('users/register');
});

router.post('/register', async(req, res, next) => {
	try{
		const {userType, firstName, lastName, email, phone, businessName, businessAddress, password, passwordRepeat} = req.body;
		if (password.length && (password === passwordRepeat)) {
			User.register(
				// new User({userType, firstName, lastName, email, phone, businessName, businessAddress}),
				{userType, firstName, lastName, email, phone, businessName, businessAddress},
				req.body.password,
				function(e, user){
					if(e){
						return next(e);
						// console.log(e);
						// console.log('something');
						// req.flash('error', "something's wrong");
						// return res.redirect('register');
					} else {
						passport.authenticate('local', 
							{	
								// successRedirect: '/dashboard',
	       //        successFlash: true,
								failureRedirect: '/register',
	              failureFlash: true
	            })
							(req, res, function() {
								// next();
								req.flash('success', 'Welcome!');
                res.redirect('/dashboard');
            });
					}
				}
			);
		} else {
			req.flash('error', "Error: fill out all fields and type in password twice.");
			res.redirect('/register');
		}
	} catch(e){
		console.error(e);
		req.flash('error', "Error");
		res.redirect('/register');
	}	
	}
);

router.get('/logout', (req, res, next)=>{
	req.logout();
	req.flash('success', 'Successfully logged out. See you next time!');
	res.redirect('login');
});

module.exports = router;