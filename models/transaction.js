const mongoose = require('mongoose')
const {Schema} = mongoose;

const opts = { toJSON: { virtuals: true } };
const transactionSchema = new Schema({
	owner: String,
	client: String,
	salon: String,
	date:	Date,
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
}, opts)

// const transactionSchemaVirtual = transactionSchema.virtual('fullDate');

transactionSchema.virtual('myDate').get(function () {
	const tokens = this.date.toLocaleString().split(',');
	return tokens[0];
})

// transactionSchema.virtual('fullDate').set(function (d) {
//     const tokens = d.split('-');
//     this.year = tokens[0];
//     this.month = tokens[1];
//     this.day = tokens[2];
// });

module.exports = mongoose.model('Transaction', transactionSchema);