const mongoose = require('mongoose');
const {singleTransaction, manyTransactions, sortedTransactions} = require('./transactions');
const Transaction = require('../models/transaction');

mongoose.connect('mongodb://localhost:27017/salon-mvp', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Mongoose connected")
});

const seedTransactions = async () => {
	await Transaction.deleteMany({});
	for (let i=0; i<manyTransactions.length; i++){
		const xAction = new Transaction({
			owner: manyTransactions[i].owner,
			client: manyTransactions[i].client,
			salon: manyTransactions[i].salon,
			date: manyTransactions[i].date,
			email: manyTransactions[i].email,
			phone: manyTransactions[i].phone,
			address: manyTransactions[i].address,
			transactionNotes: manyTransactions[i].transactionNotes,
			lineItems: manyTransactions[i].lineItems
		})
	  const totalValue = xAction.lineItems.reduce( (acc, v) => {return v.lineItemValue + acc}, 0);
	  xAction.total = totalValue;
	  console.log(xAction);
		await xAction.save();
	}
}

seedTransactions().then(() => {
	mongoose.connection.close();
})