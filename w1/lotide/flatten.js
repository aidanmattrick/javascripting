const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed: " + `\"${array1}\" === \"${array2}\"`);
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


const flatten = function (arrays) {
  let result = [];
  for (let i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] == "object") {
      for (let j = 0; j < arrays[i].length; j++) {
        result.push(arrays[i][j]);
      }
    }
    else{
    result.push(arrays[i]);  
    }
  }
  return result;
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);