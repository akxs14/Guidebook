var express = require('express');
var app = express();
var path = require('path');

app.configure(function() {
  app.use(app.router);
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static("/controller", path.join(__dirname, '/public/controller')));
app.use(express.static("/controller", path.join(__dirname, '/public/model')));
app.use(express.static("/controller", path.join(__dirname, '/public/view')));

app.get('/', function(req, res) {
  res.sendfile('public/Guidebook.html');
});

app.listen(3000);
console.log('listening on port 3000');
