var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect('https://www.github.com/sopow/sopow.fr');
});

module.exports = router;
