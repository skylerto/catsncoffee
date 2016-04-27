var express = require('express');
var router = express.Router();
var Shopify = require('../src/shop');

var products = [];
Shopify.get('/admin/products.json', function(err, data, headers){
  if(err) {
    return console.log(err); //fail silently (likely network issue)
  }
  products = data.products;
});

/**
 * Get all the Products.
 */
router.get('/products', function (req, res, next) {
    res.render('products', {
      title: 'Cats n Coffee',
      pagename: 'Product Catalog',
      products: products,
      layout: 'layouts/single'
    });
});

/**
 * Get a specific product.
 */
router.get('/products/:id', (req, res, next) => {
  var id = req.params.id;
  if(id == 'new'){
    console.log('NEW PRODUCT');
    res.render('new_product', {
      title: 'Cats n Coffee',
      pagename: 'New Product',
      layout: 'layouts/single'
    });
    return;
  }
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

/**
 * Post a new Product.
 */
router.post('/products/new', (req, res, next) => {
  if(!(req.body.title && req.body.body && req.body.price)){
    return console.log('values not present!');
  }
  var prod = {
    "product": {
      "title": req.body.title,
      "body_html": req.body.body,
      "vender": "catsncoffee",
      "variants": [{
        "option1": "First",
        price: req.body.price,
        "sku": req.body.sku
      }],
    }
  };

  Shopify.post('/admin/products.json', prod, function(err, data, headers){
    console.log(data);
    next();
  });

});

router.post('/products/new', (req, res) => {
  var put_data = {
    "product": {
      "body_html": "<strong>Updated!</strong>"
    }
  }

  Shopify.put('/admin/products/1234567.json', put_data, function(err, data, headers){
    console.log(data);
  });
});

module.exports = router;
