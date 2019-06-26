//TEST
const assertEqual = function (actual, expected) {
  if (actual == expected) {
    console.log(`✅✅✅ Assertion Passed \"${actual}\" === \"${expected}\"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed \"${actual}\" !== \"${expected}\"`);
  }
};

//COMPARE ARRAYS
const eqArrays = function (array1, array2) {
  if (array1.length != array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};


//FUNC
const eqObjects = function (obj1, obj2) {
  //let check = false;
  if (eqArrays(Object.keys(obj1).sort(), Object.keys(obj2).sort()) == false) return false;

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    }
    else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const abc = { a: "1", b: "2", c: "3" };


assertEqual(eqObjects(ab, ba), true);