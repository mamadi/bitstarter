var express = require('express');

var fs = require('fs');

//var indexContent = '';

var app = express.createServer(express.logger());

fs.readFileSync(path.resolve(__dirname, 'index.html'), function (err, data) {
  if (err) throw err;
  console.log(data);
  //indexContent = data.toString;
});

app.get('/', function(request, response) {
  response.send(indexContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
