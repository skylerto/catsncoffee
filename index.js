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


// routes
app.use('/', require('./routes/index'));


//const server = require('./src/server')(app);
app.listen(3030, () => {
  console.log('app listening on port 3000');
});
