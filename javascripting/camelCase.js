const camelCase = function(input) {
  stringerBell = "";
  for (let i = 0; i < input.length; i++) {
    if(input.charAt(i) === " "){
      i += 1;
      stringerBell += input.charAt(i).toUpperCase();;    
    }
    else{
      stringerBell += input.charAt(i);
    }
  }
  return stringerBell;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));