const assertEqual = function (actual, expected) {
  if (actual == expected) {
    console.log(`✅✅✅ Assertion Passed \"${actual}\" === \"${expected}\"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed \"${actual}\" !== \"${expected}\"`);
  }
};

const countLetters = function (input) {
  let str = input;
  result = {};
  for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) == " ") continue; 
    if (!result[str.charAt(i)]) result[str.charAt(i)] = 1;
    else {
      result[str.charAt(i)] += 1;
    }
  }
  return result;
};


assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
} );


console.log(countLetters("lighthouse in the house"));