const express = require('express');
const router = express.Router();

const { 
    getTransactions, 
    addTransaction, 
    updateTransaction, 
    deleteTransaction } = require('../controllers/transaction.controllers.js')

router.get('/', getTransactions )

router.post('/addtransaction', addTransaction )

router.put('/updatetransaction', updateTransaction )

router.delete('/deletetransaction', deleteTransaction )

module.exports = router;