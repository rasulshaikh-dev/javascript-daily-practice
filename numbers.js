
// Numbers

// 1) Number Data Type
// JavaScript has one numeric type called Number.

let a = 10;
let b = 20;

console.log(typeof a);

// 2) Integer Number
// Whole numbers without decimals

let num = 100;
console.log(num);

// 3) Floating Point Number
// Numbers with decimal values

let price = 9.99;
console.log(price);

// 4) Positive Number
// Numbers greater than zero

let score = 25;
console.log(score);

// 5) Negative Number
// Numbers less than zero

let negativeScore = -25;
console.log(negativeScore);

// 6) Number Conversion
// Convert other types into numbers

let x = Number("100");
console.log(x);

// 7) parseInt()
// Convert string to integer

let num1 = parseInt("50px");
console.log(num1);

// 8) parseFloat()
// Convert string to decimal number

let num2 = parseFloat("10.76px");
console.log(num2);

// 9) toString()
// Convert number into a string

let num3 = 50;
console.log(num3.toString());

// 10) toFixed()
// Round a number to a fixed number of decimal places

let price1 = 9.456;
console.log(price1.toFixed(2));

// 11) toPrecision()
// Format number to a specific length

let num4 = 9.4566;
console.log(num4.toPrecision(2));

// 12) NaN (Not a Number)
// Occurs when a calculation is invalid

console.log("hello" / 2);

// 13) Infinity
// Result when a number exceeds the limit

console.log(10 / 0);

// 14) Number.isInteger()
// Check if value is integer

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));