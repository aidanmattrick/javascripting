const assertEqual = require('../assertEqual');
const { tail, result } = require('../tail.js');

result(tail([5,6,7]), [6,7]);
