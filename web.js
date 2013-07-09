fs  = require('fs');
fs.readFile('/home/sensei/startup/bitstarter/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
   console.log(data);


});

