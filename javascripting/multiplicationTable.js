const multiplicationTable = function(maxValue) {
  var masterString = '';
  for (var i = 1; i <= maxValue; i++) {
      for (var j = 1; j <= maxValue; j++) {
          masterString += (i*j) + ' ';
      }
      masterString += '\n'
  }
  return masterString;
};
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
  

