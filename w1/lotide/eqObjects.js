//TEST
const assertEqual = function (actual, expected) {
  if (actual == expected) {
    console.log(`✅✅✅ Assertion Passed \"${actual}\" === \"${expected}\"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed \"${actual}\" !== \"${expected}\"`);
  }
};

//FUNC
const eqObjects = function (object1, object2) {
  let check = false;
  for (let [key, value] of Object.entries(object1)) {
    for (let [key2, value2] of Object.entries(object2)) {
      if (key == key2) {
        if (value == value2) check = true;
        else return false;
      }
    }
  }
  if (Object.keys(object1).length != Object.keys(object2).length) return false;
  if (check == true) return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };


assertEqual(eqObjects(ab, ba), true);