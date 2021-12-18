var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect('mailto:contact@sopow.fr');
});

module.exports = router;
