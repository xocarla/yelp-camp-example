var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');
});

app.listen(process.env.Port, process.env.IP, function() {
  console.log('The YelpCamp Server has Started!');
});
