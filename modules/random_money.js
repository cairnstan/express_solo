var randomMath = require('./math_random');
var convertMoney = require('./money_conversion');

var randomMoney = function(){
  return convertMoney(randomMath(100, 1000000));
}

var balance = function() {
  return 'Account balance : \n';
}

exports.randomMoney = randomMoney;
exports.balance = balance;
