const calculateChange = function(total, cash) {
  let bill = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  }
var remainder = cash - total;

  var ten = Math.floor(remainder/1000);
  if(ten > 0 && cash >= 1000){
    cash -= 1000 * ten;
    remainder -= 1000 * ten;
    bill.tenDollar += ten;
  }
  var five = Math.floor(remainder/500);
  if(five > 0 && cash >= 500){
    cash -= 500 * five;
    remainder -= 500 * five;
    bill.fiveDollar += five;
  }
  var two = Math.floor(remainder/200);
  if(two > 0 && cash >= 200){
    cash -= 200 * two;
    remainder -= 200 * two;
    bill.twoDollar += two;
  }
  var one = Math.floor(remainder/100);
  if(one > 0 && cash >= 100){
    cash -= 100 * one;
    remainder -= 100 * one;
    bill.oneDollar += one;
  }
  var quartah = Math.floor(remainder/25);
  if(quartah > 0 && cash >= 25){
    cash -= 25 * quartah;
    remainder -= 25 * quartah;
    bill.quarter += quartah;
  }
  var dimer = Math.floor(remainder/10);
  if(dimer > 0 && cash >= 10){
    cash -= 10 * dimer;
    remainder -= 10 * dimer;
    bill.dime += dimer;
  }
  var nickil = Math.floor(remainder/5);
  if(nickil > 0 && cash >= 5){
    cash -= 5 * nickil;
    remainder -= 5 * nickil;
    bill.nickel += nickil;
  }
  var pennie = Math.floor(remainder/1);
  if(pennie > 0 && cash >= 1){
    cash -= 1 * pennie;
    remainder -= 1 * pennie;
    bill.penny += pennie;
  }
  return bill; 

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));