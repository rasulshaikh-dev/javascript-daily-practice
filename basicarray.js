
// Array Basic Methods


// 1) push()
// Adds an element to the end of the array

let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);


// 2) pop()
// Removes the last element from the array

let arr2 = [10, 20, 30];
arr2.pop();
console.log(arr2);


// 3) shift()
// Removes the first element from the array

let arr3 = [5, 6, 7];
arr3.shift();
console.log(arr3);


// 4) unshift()
// Adds an element to the beginning of the array

let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4);


// 5) indexOf()
// Returns the index of a specified element

let arr5 = ["apple", "banana", "orange"];
console.log(arr5.indexOf("banana"));


// 6) includes()
// Checks if an array contains a specific value

let arr6 = [10, 20, 30];
console.log(arr6.includes(20));


// 7) slice()
// Returns a portion of an array

let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.slice(1, 4));


// 8) splice()
// Adds or removes elements from an array

let arr8 = [1, 2, 3, 4];
arr8.splice(2, 1);
console.log(arr8);


// 9) concat()
// Merges two arrays

let arr9a = [1, 2];
let arr9b = [3, 4];
console.log(arr9a.concat(arr9b));


// 10) join()
// Converts an array into a string

let arr10 = ["JavaScript", "is", "fun"];
console.log(arr10.join(" "));