const mongoose = require('mongoose'),
 {Schema} = mongoose,
 passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	userType: {
		type: String,
		enum: ['owner', 'client', 'admin']
	},
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
	businessName: String,
	businessAddress: String
	// password: String
})

userSchema.plugin(passportLocalMongoose, {
	usernameField: 'email'
});

module.exports = mongoose.model('Users', userSchema);