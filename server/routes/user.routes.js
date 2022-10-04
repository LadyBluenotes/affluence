const express = require('express');
const router = express.Router();

const {
    getLogin,
    loginUser,
    createUser,
    logout
} = require('../controllers/user.controllers');

router.post('/signup', createUser)

router.post('/login', loginUser)
router.get('/login', getLogin)

router.get('/logout', logout)

module.exports = router;