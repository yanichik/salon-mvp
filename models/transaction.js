const mongoose = require('mongoose')
const {Schema} = mongoose;

const transactionSchema = new Schema({
	owner: String,
	client: String,
	salon: String,
	date:	String,
	email: String,
	phone: String,
	address: String,
	transactionNotes: String,
	lineItems: [
		{
			lineItemType: {
				type: String,
				enum: ['product/service', 'expense']
			},
			lineItemContent: String,
			lineItemValue: Number
		}
	],
	total: Number
})

module.exports = mongoose.model('Transaction', transactionSchema);