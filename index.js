'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// Routes

var hbs = require('express-hbs');

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '/public')));

/**/
app.use(bodyParser());

/**
 * Setup Routes
 */
// Index router.
const index = require('./routes/index');
app.use(index);

// Products router.
const products = require('./routes/products');
app.use(products);



//const server = require('./src/server')(app);
const server = app.listen(3030, () => {
  console.log('app listening on port 3000');
});

module.exports = server;


