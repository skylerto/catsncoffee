var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Cats n Coffee',
      pagename: 'Home',
      layout: 'layouts/single'
    });
});

module.exports = router;

