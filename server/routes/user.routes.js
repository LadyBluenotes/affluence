const express = require('express');
const router = express.Router();

const {
    getLogin,
    getSignup,
    postLogin,
    postSignup
} = require('../controllers/user.controllers');

router.post('/signup', postSignup)
router.get('/signup', getSignup)

router.post('/login', getLogin)
router.get('/postLogin', postLogin)

module.exports = router