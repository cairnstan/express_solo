var accountBalance = require('./random_money');
function getAccountBalance(){
  return accountBalance.balance() + accountBalance.randomMoney();
}


module.exports = getAccountBalance;
