const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');

// router.get('/data', userController.getSignup)
router.post('/signup', userController.getSignup )

module.exports = router;