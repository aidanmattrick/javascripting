//Test
/*
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed" +  `\"${array1}\" === \"${array2}\"`);
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

assertArraysEqual(["banker", 2, 3], ["banker", 2, 3]);
*/

//Middle
const middle = function(array) {
  let result = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length < 3) return result;
  if (array.length % 2 === 0) {
    result.push(array[middleIndex - 1]);
    result.push(array[middleIndex]);
  } else {
    result.push(array[middleIndex]);
  }
  return result;
};

module.exports = middle;

