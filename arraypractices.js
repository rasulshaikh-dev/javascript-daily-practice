
// JavaScript Array Practice Questions & Answers


// 1) Create an array with 3 numbers

let arr1 = [10, 20, 30];
console.log(arr1);


// 2) Add a new element to the end using push()

let arr2 = [1, 2, 3];
arr2.push(4);
console.log(arr2);


// 3) Remove the last element using pop()

let arr3 = [5, 6, 7];
arr3.pop();
console.log(arr3);


// 4) Add an element to the beginning using unshift()

let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4);


// 5) Remove the first element using shift()

let arr5 = [10, 20, 30];
arr5.shift();
console.log(arr5);


// 6) Find the index of "banana"

let arr6 = ["apple", "banana", "orange"];
console.log(arr6.indexOf("banana"));


// 7) Check if array contains 50

let arr7 = [10, 20, 50, 60];
console.log(arr7.includes(50));


// 8) Get part of array using slice()

let arr8 = [1, 2, 3, 4, 5];
console.log(arr8.slice(1, 4));


// 9) Remove one element using splice()

let arr9 = [1, 2, 3, 4];
arr9.splice(2, 1);
console.log(arr9);


// 10) Join array into a string

let arr10 = ["JavaScript", "is", "awesome"];
console.log(arr10.join(" "));


// 11) Merge two arrays using concat()

let arr11a = [1, 2];
let arr11b = [3, 4];
console.log(arr11a.concat(arr11b));


// 12) Reverse an array

let arr12 = [1, 2, 3];
console.log(arr12.reverse());


// 13) Sort numbers

let arr13 = [5, 2, 8, 1];
console.log(arr13.sort());


// 14) Print each element using forEach()

let arr14 = [10, 20, 30];
arr14.forEach(num => console.log(num));


// 15) Create new array with doubled values using map()

let arr15 = [1, 2, 3];
let result15 = arr15.map(num => num * 2);
console.log(result15);


// 16) Filter numbers greater than 10

let arr16 = [5, 12, 18, 3];
let result16 = arr16.filter(num => num > 10);
console.log(result16);


// 17) Find first number greater than 10

let arr17 = [5, 8, 15, 20];
console.log(arr17.find(num => num > 10));


// 18) Find index of first number greater than 10

let arr18 = [5, 8, 15, 20];
console.log(arr18.findIndex(num => num > 10));


// 19) Sum all numbers using reduce()

let arr19 = [1, 2, 3, 4];
let sum = arr19.reduce((total, num) => total + num, 0);
console.log(sum);


// 20) Check if all numbers are even

let arr20 = [2, 4, 6, 8];
console.log(arr20.every(num => num % 2 === 0));