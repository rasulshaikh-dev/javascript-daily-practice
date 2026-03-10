
// Time Methods


// 1) getHours()
// Returns the current hour (0–23)

let time1 = new Date();
console.log(time1.getHours());


// 2) getMinutes()
// Returns the current minutes

let time2 = new Date();
console.log(time2.getMinutes());


// 3) getSeconds()
// Returns the current seconds

let time3 = new Date();
console.log(time3.getSeconds());


// 4) getMilliseconds()
// Returns milliseconds

let time4 = new Date();
console.log(time4.getMilliseconds());


// 5) setHours()
// Sets the hour

let time5 = new Date();
time5.setHours(10);
console.log(time5);


// 6) setMinutes()
// Sets the minutes

let time6 = new Date();
time6.setMinutes(30);
console.log(time6);


// 7) toLocaleTimeString()
// Returns time in local format

let time7 = new Date();
console.log(time7.toLocaleTimeString());


// 8) toLocaleString()
// Returns date and time together

let time8 = new Date();
console.log(time8.toLocaleString());


// 9) toISOString()
// Returns time in ISO format

let time9 = new Date();
console.log(time9.toISOString());