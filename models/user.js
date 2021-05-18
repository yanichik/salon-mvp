const mongoose = require('mongoose');
const {Schema} = mongoose;

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
	businessAddress: String,
	password: String
})

module.exports = mongoose.model('Users', userSchema);