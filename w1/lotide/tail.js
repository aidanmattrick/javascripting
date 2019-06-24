const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed "${actual}" !== "${expected}"`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

const result = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    assertEqual(array1[i], array2[i]);
  }
};

result(tail([5,6,7]), [6,7]);