let express = require('express');
let router = express.Router();

const { getData } = require('../controllers/test');

router.get('/data', getData )
module.exports = router;