const organizeInstructors = function(instructors) {
  let list = {};
  instructors.forEach((elem) => {
    if (!list[elem.course]) {
      list[elem.course] = [];
    }
    list[elem.course].push(elem.name);
  });
  return list;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));








































/*

const organizeInstructors = function(instructors) {
  let list = {};
  instructors.forEach(function(elem){
    if(!list[elem.course]) list[elem.course] = [];
    list[elem.course].push(elem.name);
  });
  return list;
};
*/