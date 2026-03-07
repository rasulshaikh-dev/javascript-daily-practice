// In js there is 7 Types on Data Types
/*
1) Number           5) Null
2) BigInt           6) Undefined
3) String           7) Symbol
4) Boolean         
*/

// 1)Number (integer or decimal).

let age = 22;
let price = 5000.00;

console.log(age, price);


// 2) BigInt Used for very large numbers.

let bigNumber = 1234567893214569877n;

console.log(bigNumber);


// 3) String Text Values.

let stringName =  "Hello, Virat Kohli";
let anotherName = "You Are Legendary Player";

console.log(stringName,anotherName);


// 4) Boolean (True or false values.)

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn,isAdmin);


//5) Null Represents empty value intentionally.

let tempereture = null;

console.log(tempereture);


// 6) Undefined variable declared but no value assigned.

let score;

console.log(score);

//  7) Symbol used for unique identifiers

let id = Symbol("userid");


console.log(typeof age);
console.log(typeof bigNumber);
console.log(typeof stringName);
console.log(typeof isLoggedIn);
console.log(typeof tempereture);
console.log(typeof score);
console.log(typeof id);


/*

Output :-

22 5000
1234567893214569877n
Hello, Virat Kohli You Are Legendary Player
true
null
undefined


Typesof :- 
number
bigint
string
boolean
object
undefined
symbol

*/