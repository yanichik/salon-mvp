module.exports.isLoggedIn = (req, res, next) =>{
	console.log(req.session.cookie)
	if (!req.isAuthenticated()) {
		req.flash('error', 'You need to sign in.');
		return res.redirect('/login');
	}
	next();
}