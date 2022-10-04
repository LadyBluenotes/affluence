const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    userID: {
        type: Number,
    }, date: {
        type: String,
    }, description: {
        type: String
    }, transactionType: {
        type: String
    }, category: {
        type: String
    }, subCategory: {
        type: String
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)