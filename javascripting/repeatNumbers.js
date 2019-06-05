const repeatNumbers = function(data) {
  let daString = "";
  for (let i = 0; i < data.length; i++) {
    let a = 0;
    let b = 0;
    if(i > 0){
      daString += ", ";
    }
    for (let c = 0; c < data[i].length; c++){
      a = data[i][0];
      b = data[i][1];
    } 
    for (let x = 0; x < b; x++) {
      daString += a;
    }
 }
 return daString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));