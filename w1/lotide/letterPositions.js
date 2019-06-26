//TEST
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed" + `\"${array1}\" === \"${array2}\"`);
  }
  else {
    console.log("🛑🛑🛑 Assertion Failed" + `\"${array1}\" !== \"${array2}\"`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length != array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

//FUNC
const letterPositions = function (sentence) {
  let str = sentence;
  //let str = sentence.replace(/ /g,'');
  const results = {};
  for (let i = 0; i < str.length; i++) {
    if (!results[str.charAt(i)]) results[str.charAt(i)] = [str.indexOf(str.charAt(i))];
    else results[str.charAt(i)].push(i); 
  }
  delete results[" "];
  return results;
};

console.log(letterPositions("lighthouse in the house"));

