const talkingCalendar = function(date) {
  var newDate = "";
  
  //Select month
  var month = date.slice(5,7);
  if (month == 01){
    newDate += "January";
  } 
  else if (month == 02){
    newDate += "February";
  } 
  else if (month == 03){
    newDate += "March";
  } 
  else if (month == 04){
    newDate += "April";
  } 
  else if (month == 05){
    newDate += "May";
  } 
  else if (month == 06){
    newDate += "June";
  } 
  else if (month == 07){
    newDate += "July";
  } 
  else if (month == 08){
    newDate += "August";
  } 
  else if (month == 09){
    newDate += "September";
  } 
  else if (month == 10){
    newDate += "October";
  } 
  else if (month == 11){
    newDate += "November";
  } 
  else {
    newDate += "December";
  } 

//Select day
  var day = date.slice(-2);
  if (day == 01){
    newDate += " 1st, ";
  } 
  else if (day == 02){
    newDate += " 2nd, ";
  } 
  else if (day == 03){
    newDate += " 3rd, ";
  } 
  else if (day == 04){
    newDate += " 4th, ";
  } 
  else if (day == 05){
    newDate += " 5th, ";
  } 
  else if (day == 06){
    newDate += " 6th, ";
  } 
  else if (day == 07){
    newDate += " 7th, ";
  } 
  else if (day == 08){
    newDate += " 8th, ";
  } 
  else if (day == 09){
    newDate += " 9th, ";
  } 
  else if (day == 10){
    newDate += " 10th, ";
  } 
  else if (day == 11){
    newDate += " 11th, ";
  } 
  else if (day == 12){
    newDate += " 12th, ";
  } 
  else if (day == 13){
    newDate += " 13th, ";
  } 
  else if (day == 14){
    newDate += " 14th, ";
  } 
  else if (day == 15){
    newDate += " 15th, ";
  } 
  else if (day == 16){
    newDate += " 16th, ";
  } 
  else if (day == 17){
    newDate += " 17th, ";
  } 
  else if (day == 18){
    newDate += " 18th, ";
  } 
  else if (day == 19){
    newDate += " 19th, ";
  } 
  else if (day == 20){
    newDate += " 20th, ";
  } 
  else if (day == 21){
    newDate += " 21st, ";
  } 
  else if (day == 22){
    newDate += " 22nd, ";
  } 
  else if (day == 23){
    newDate += " 23rd, ";
  } 
  else if (day == 24){
    newDate += " 24th, ";
  } 
  else if (day == 25){
    newDate += " 25th, ";
  } 
  else if (day == 26){
    newDate += " 26th, ";
  } 
  else if (day == 27){
    newDate += " 27th, ";
  } 
  else if (day == 28){
    newDate += " 28th, ";
  } 
  else if (day == 29){
    newDate += " 29th, ";
  } 
  else if (day == 30){
    newDate += " 30th, ";
  } 
  else{
    newDate += " 31st, ";
  }

//select year
  var year = date.slice(0,4);
  newDate += year;
return newDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));