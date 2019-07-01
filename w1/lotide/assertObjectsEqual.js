
//TEST - COMPARE ARRAYS
const eqArrays = function(array1, array2) {
  if (array1.length != array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};


//COMPARE OBJECTS
const eqObjects = function(obj1, obj2) {
  //let check = false;
  if (eqArrays(Object.keys(obj1).sort(), Object.keys(obj2).sort()) == false) return false;

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

//RETURN RESULT
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log("✅✅✅ Assertion Passed: " + `\"${inspect(obj1)}\" === \"${inspect(obj2)}\"`);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + `\"${inspect(obj1)}\" !== \"${inspect(obj2)}\"`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


//assertObjectsEqual(ba, ab);

module.exports = assertObjectsEqual;