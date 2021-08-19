const multipleVars = require("./sumitTest");
const lodash = require("lodash");
var a = 9;

console.log(global.a);
console.log(multipleVars.arr);
console.log(multipleVars.a);

console.log(`Last element of the array: ${lodash.last(multipleVars.arr)}`);

multipleVars.f();

console.log(__dirname);
console.log(__filename);
