var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
// tell express to serve files beginning from this directory
app.use(express.static(path.join(__dirname, 'bower_components')));

// the body parser, not part of Express so need to 'require'
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())



// define routes
app.use(require('./routes/todos'));

// start the server
app.listen(1337, function() {
   console.log('Adto na ha port 1337'); 
});