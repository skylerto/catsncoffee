var express = require('express');
var router = express.Router();
var Shopify = require('../src/shop');

var products;
Shopify.get('/admin/products.json', function(err, data, headers){
    products = data.products;
  });

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Cats n Coffee',
      pagename: 'Home',
      layout: 'layouts/single'
    });
});


router.get('/products', function (req, res, next) {
    res.render('products', {
      title: 'Cats n Coffee',
      pagename: 'Product Catalog',
      products: products,
      layout: 'layouts/single'
    });
});

router.get('/products/:id', (req, res) => {
  var id = req.param('id');
  console.log(id);
  var product = products.filter((prod) => {
    return prod.id == id;
  })[0];
  console.log('PRODUCT');
  console.log(product);
  res.render('product', {
    title: 'Cats n Coffee',
    pagename: 'Product Catalog',
    product: product,
    layout: 'layouts/single'
  });
});

module.exports = router;

