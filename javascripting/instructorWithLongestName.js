const instructorWithLongestName = function(instructors) {
  var obj;
  let count = 0;
  for (let i = 0; i < instructors.length; i++) {
    let a = 0;
    for (let x = 0; x < instructors[i].name.length; x++){
      a += 1; 
    }
    if (a >= count){
      count = a;
      obj = instructors[i];
    }
  }
  return obj;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));