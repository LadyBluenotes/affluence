let express = require('express');
let router = express.Router();

const { getSignup, postSignup } = require('../controllers/auth');

router.get('/signup', getSignup)
router.post('/signup', postSignup)

module.exports = router;