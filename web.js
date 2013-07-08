var express = require('express');
var fs = require('fs'); 
var app = express.createServer(express.logger());
var buf = new Buffer(256);
var content = buf.toString(fs.readFileSync('/home/bitstarter/index.html'));



app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
