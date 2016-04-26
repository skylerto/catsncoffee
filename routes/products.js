var express = require('express');
var router = express.Router();
var Shopify = require('../src/shop');


/* GET home page. */
router.get('/products', function (req, res, next) {

  Shopify.get('/admin/products.json', function(err, data, headers){
      console.log(data); // Data contains product json information
      console.log(headers); // Headers returned from request
  });
  // get items from the shop!
  res.render('index', {
    title: 'Cats n Coffee',
    pagename: 'Home',
    items: items,
    layout: 'layouts/single'
  });
});

module.exports = router;

