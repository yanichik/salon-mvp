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
	phoneNumber: String,
})

module.exports = mongoose.model('Users', userSchema);

