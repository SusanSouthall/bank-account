var name = name;
var initDeposit = initDeposit;
var balance = "";

function BankAccount(name, initDeposit){
  this.name = name;
  this.initDeposit = initDeposit;
  this.balance = initDeposit;
}

BankAccount.prototype.transaction = function(deposit, withdraw) {
  var newBalance;
  newBalance = this.balance + deposit;
  newBalance = this.balance - withdraw;
  return newBalance;
}

// var addDeposit = addDeposit;
// var withdraw = withdraw;
// var newBalance = "";
//
