
// Array Advanced Methods


// 1) reverse()
// Reverses the order of elements

let arr11 = [1, 2, 3, 4];
console.log(arr11.reverse());


// 2) sort()
// Sorts elements in an array

let arr12 = [4, 1, 3, 2];
console.log(arr12.sort());


// 3) forEach()
// Executes a function for each element

let arr13 = [1, 2, 3];
arr13.forEach(num => console.log(num));


// 4) map()
// Creates a new array with modified elements

let arr14 = [1, 2, 3];
let result14 = arr14.map(num => num * 2);
console.log(result14);


// 5) filter()
// Returns elements that pass a condition

let arr15 = [10, 20, 30, 40];
let result15 = arr15.filter(num => num > 20);
console.log(result15);


// 6) find()
// Returns the first element that matches a condition

let arr16 = [5, 10, 15];
console.log(arr16.find(num => num > 8));


// 7) findIndex()
// Returns the index of the first matching element

let arr17 = [5, 10, 15];
console.log(arr17.findIndex(num => num > 8));


// 8) reduce()
// Reduces array to a single value

let arr18 = [1, 2, 3, 4];
let sum = arr18.reduce((total, num) => total + num, 0);
console.log(sum);


// 9) some()
// Checks if at least one element matches condition

let arr19 = [1, 3, 5, 8];
console.log(arr19.some(num => num % 2 === 0));


// 10) every()
// Checks if all elements match condition

let arr20 = [2, 4, 6];
console.log(arr20.every(num => num % 2 === 0));