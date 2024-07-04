let { array, sumArray } = require('./first');
let second = require('./second');

console.log("First Module");
console.log("Array =",array);
console.log("Array sum:",sumArray(array));
console.log("Second Module");
console.log("Person:",second);
