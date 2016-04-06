var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var accountBalance = require('./modules/app.js')
var port = 3000;

// console.log(giveAccountBalance);
// var balance = accountBalance();

// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({extended: true}));
// app.get(accountBalance, function(req, res){
//   res.send('meow');
// });
// app.get('/', function(req, res){
//   res.send('meow');
// })
app.get('/balance', function(req, res){
  var giveAccountBalance = accountBalance();
  res.send(giveAccountBalance);
})

app.use(express.static('public'));
app.listen(port, function(){
  console.log('Listening for requests on port: ', port);
});
