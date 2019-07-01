const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed: " +  `\"${array1}\" === \"${array2}\"`);
  }
  else {
    console.log("🛑🛑🛑 Assertion Failed: " + `\"${array1}\" !== \"${array2}\"`);
  }
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};


const without = function (source, itemsToRemove) {
  let result = source;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (result[i] === itemsToRemove[j]) result.splice(i, 1);
    }
  }
  return result;
};

/*()
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1]), [2,3]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/

module.exports = without;