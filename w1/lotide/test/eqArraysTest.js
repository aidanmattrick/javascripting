const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["bank\r", 2, 3], ["banker", 2, 3]), true);