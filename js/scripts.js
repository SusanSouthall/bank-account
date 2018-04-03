//Business logic

var name = name;
var initDeposit = initDeposit;
var balance = "";

function BankAccount(name, initDeposit){
  this.name = name;
  this.initDeposit = initDeposit;
  this.balance = initDeposit;
}

BankAccount.prototype.deposit = function(deposit) {
  var newBalance;
  newBalance = this.balance + deposit;
  return newBalance;
}

BankAccount.prototype.withdrawal = function(withdraw) {
  var newBalance;
  newBalance = this.balance - withdraw;
  return newBalance;
}
function transaction(){
  if(document.getElementById("deposit").selected = true) {
    return newBalance;
  }else if (document.getElementById("withdrawal").selected = true){
    return newBalance;
  }
}

function makeTransaction() {
  document.getElementById("transactionDetails").show();
}

function makeNewAccount() {

}

document.getElementById("enter").addEventListener("click", makeTransaction);

// User logic
  $(function(){

    $("#formOne").submit(function(event){
      event.preventDefault();
      document.getElementById("enter").addEventListener("click", makeTransaction);
      var savings = $("#savings").val();
      var checking = $("#checking").val();
      var amount = parseInt($("#amount").val());
      var newBankAccount = new BankAccount(name, initDeposit);
      var newBalance = newBankAccount.transaction(amount);
      transaction();


    // $("#formOne").fadeIn();
    // $("#balance").text(newBalance);
    // $("#hidden").fadeIn();
    });
  });
