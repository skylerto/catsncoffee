var shopifyAPI = require('shopify-node-api');
var secrets = require('./dev.json');

var Shopify = new shopifyAPI({
    shop: secrets.shop, // MYSHOP.myshopify.com
    shopify_api_key: secrets.api_key, // Your API key
    access_token: secrets.access_token, // Your Shared Secret
});

module.exports = Shopify;
