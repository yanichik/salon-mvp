const mongoose = require('mongoose')
const {Schema} = mongoose;

const transactionSchema = new Schema({
	salon: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	client: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	date: {
		type: String
	},
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
	transactionNotes: String
})