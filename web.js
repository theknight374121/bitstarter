var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs');
var content ;
var data;
fs.readFile('/home/sensei/bitstarter/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
 app.get('/', function(request, response) {
  response.send(data);
});


});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
