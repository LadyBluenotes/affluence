const passport = require('passport')
const validator = require('validator')
const Transaction = require('../models/Transaction.model')

const getTransactions = (req, res) => {
    // retrieve all transactions listed in db
    // sort from oldest to newst
    res.json({ mssg:'get transactions'})
}

const addTransaction = (req, res) => {
    // add transaction to db
    res.json({ mssg:'add transactions'})
}

const updateTransaction = (req, res) => {
    //update transaction in db
    res.json({ mssg:'update transactions'})
}

const deleteTransaction = (req, res) => {
    // delete transaction from db
    res.json({ mssg:'delete transactions' })
}
module.exports = { getTransactions, addTransaction, updateTransaction, deleteTransaction }