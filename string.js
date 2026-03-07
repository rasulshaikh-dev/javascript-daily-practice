
// In JavaScript, a string is used to store text data like names, messages, or sentences.

// There are 3 ways to create a string

// 1) Single Quotes
// 2) Double Quotes
// 3) Backticks

/*
let name = 'JAVASCRIPT';
let name = "JAVASCRIPT";
let name = `JAVASCRIPT`;
*/

// Basically there are 50+ string methods,
// but in daily use only 10–15 are commonly used.


// 1) length

let gameName = "Mario";

console.log(gameName.length);


// 2) charAt()

let name = "rasul";

console.log(name.charAt(3));


// 3) at()  (Modern way to access characters)

let sportPlayer = "Virat Kohli";

console.log(sportPlayer.at(-2));


// 4) includes()

let text = "I love you";

console.log(text.includes("love"));


// 5) indexOf()

let test = "Hello World";

console.log(test.indexOf("World"));


// 6) slice()

let part = "JAVASCRIPT";

console.log(part.slice(0,3));


// 7) split()

let game = "FreeFire";

console.log(game.split(""));


// 8) replace()

let gameChanger = "CallofDuty";

console.log(gameChanger.replace("Duty", "BGMI"));


// 9) toUpperCase()

let capital = "javascript";

console.log(capital.toUpperCase());


// 10) toLowerCase()

let small = "JAVASCRIPT";

console.log(small.toLowerCase());


// 11) trim()

let space = " 122222        trimthisspace     ";

console.log(space.trim());


// 12) startsWith()

let start = "Javascript";

console.log(start.startsWith("Java"));


// 13) endsWith()

let end = "Javascript";

console.log(end.endsWith("script"));


// 14) repeat()

console.log("JS".repeat(10));