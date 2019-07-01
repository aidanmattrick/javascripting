const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

const result = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    assertEqual(array1[i], array2[i]);
  }
};


module.exports = { tail: tail , result: result};