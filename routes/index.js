var express = require('express');
var router = express.Router();
var Shopify = require('../src/shop');

/* GET home page. */
router.get('/', function (req, res, next) {
    const items = '';
    res.render('index', {
      title: 'Cats n Coffee',
      pagename: 'Home',
      items: items,
      layout: 'layouts/single'
    });
});


router.get('/products', function (req, res, next) {
  Shopify.get('/admin/products.json', function(err, data, headers){
    console.log(data.products[0]);

    res.render('products', {
      title: 'Cats n Coffee',
      pagename: 'Home',
      products: data.products,
      layout: 'layouts/single'
    });
  });
});

module.exports = router;

