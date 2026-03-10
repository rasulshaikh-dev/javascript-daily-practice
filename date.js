
// Date Methods


// 1) new Date()
// Creates a new Date object with the current date and time

let date1 = new Date();
console.log(date1);


// 2) Date.now()
// Returns the current timestamp in milliseconds

console.log(Date.now());


// 3) getFullYear()
// Returns the current year

let date2 = new Date();
console.log(date2.getFullYear());


// 4) getMonth()
// Returns the month (0–11)

let date3 = new Date();
console.log(date3.getMonth());


// 5) getDate()
// Returns the day of the month (1–31)

let date4 = new Date();
console.log(date4.getDate());


// 6) getDay()
// Returns the day of the week (0–6)

let date5 = new Date();
console.log(date5.getDay());


// 7) setFullYear()
// Sets the year

let date6 = new Date();
date6.setFullYear(2030);
console.log(date6);


// 8) setMonth()
// Sets the month

let date7 = new Date();
date7.setMonth(5);
console.log(date7);


// 9) setDate()
// Sets the day of the month

let date8 = new Date();
date8.setDate(25);
console.log(date8);


// 10) toDateString()
// Returns date as a readable string

let date9 = new Date();
console.log(date9.toDateString());