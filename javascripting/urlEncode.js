const urlEncode = function(text) {
  let masterString = "";
  for (let i = 0; i < text.length; i++) {
    if(text.charAt(i) !== " "){
      masterString += text.charAt(i);
    }
    else if (text.charAt(i) === " " && i !== 0 && i !== (text.length - 1)){
      masterString += "%20";
    }
  }
  return masterString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));