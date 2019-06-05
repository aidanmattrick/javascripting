const sumLargestNumbers = function(data) {
  data.sort((a, b) => a - b);
    let x = data[data.length - 1]
    let y = data[data.length - 2];
    return x + y;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));