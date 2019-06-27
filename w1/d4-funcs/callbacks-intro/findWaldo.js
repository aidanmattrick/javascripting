/*const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}*/

const findWaldo = function (names, found) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
};


const actionWhenFound = function(input) {
  console.log("Found him!" + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);