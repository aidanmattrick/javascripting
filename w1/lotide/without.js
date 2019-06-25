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
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) source.splice(i, 1);
    }
  }
  return source;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1]), [2,3]);