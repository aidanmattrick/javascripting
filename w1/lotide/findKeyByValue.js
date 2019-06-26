//TEST
const assertEqual = function (actual, expected) {
  if (actual == expected) {
    console.log(`✅✅✅ Assertion Passed \"${actual}\" === \"${expected}\"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed \"${actual}\" !== \"${expected}\"`);
  }
};

//FUNC
const bestTvShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
}

const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] == value) return key;
  }
}

assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");