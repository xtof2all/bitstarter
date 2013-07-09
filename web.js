var exporess = require('express');
var fs = require('fs');

var app = express(express.logger());

app.get('/', function(request, response) {
   var buf = fs.readFileSync('index.html');
   response.send(bug.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
