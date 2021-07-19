const mongoose = require('mongoose'),
    User = require('./user'),
    { Schema } = mongoose;

const opts = { toJSON: { virtuals: true } };
const transactionSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    client: String,
    salon: String,
    date: Date,
    transactionNotes: String,
    lineItems: [{
        lineItemType: {
            type: String,
            enum: ['product/service', 'expense']
        },
        lineItemContent: String,
        lineItemValue: Number
    }],
    total: Number
}, opts)

// const transactionSchemaVirtual = transactionSchema.virtual('fullDate');

transactionSchema.virtual('myDate').get(function() {
    const tokens = this.date.toLocaleString().split(',');
    return tokens[0];
})

// todo:
// transactionSchema.virtual('fullDate').set(function (d) {
//     const tokens = d.split('-');
//     this.year = tokens[0];
//     this.month = tokens[1];
//     this.day = tokens[2];
// });

module.exports = mongoose.model('Transaction', transactionSchema);