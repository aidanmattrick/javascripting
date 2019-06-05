const conditionalSum = function(values, condition) {
  let master = [];
  if(condition === "odd"){
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1){
        master.push(values[i]);
      };
    }
  }
  if(condition === "even"){
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0){
        master.push(values[i]);
      };
    }
  }
  let end = 0;
  for (let i = 0; i < master.length; i++) {
    end += master[i];
  }
  return end;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));