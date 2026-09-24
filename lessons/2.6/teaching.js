// ======================================
let age = 20;
age = age + 1; // birthday

let months = age * 12

console.log("My age is");
console.log(age);
console.log("My age in months");
console.log(months)

// observe output
// we used + and *

// Other arithmetic operators:
let myMoney = 100;
let productPrice = 23;
let discount = 10;

// final price is full price minus discount
let finalPrice = productPrice - productPrice*10/100

// buy product
myMoney = myMoney - finalPrice

console.log("Money in pocket after purchase:")
console.log(myMoney)

// modulus % and use of ()
// from total seconds to minutes and seconds
let totalSeconds = 119;

// how many seconds left after counting the full minutes
let seconds = totalSeconds % 60
// how many full minutes
let minutes = (totalSeconds - seconds) / 60;

console.log("Total seconds:")
console.log(totalSeconds)
console.log("Is");
console.log(minutes)
console.log("minutes and ")
console.log(seconds)
console.log("seconds")

// see link at the right of debug console to point to the line generating the output

// power
// compute are of a circle
let radius = 10;
let area = 10**2 * 3.14;

console.log("area of the circle");
console.log(area);


// Updating shortcuts (see with debugger)
let x = 10;
x -= 2; // shortcut for x = x - 2;
x += 2; // shortcut for x = x + 2;
console.log(x)

// STUDENTS: code for * and /

// incrementing/decrementing shortcuts (see with debugger)
let y = 10;

y++; // shortcut for y = y + 1;
y--; // shortcut for y = y - 1;
console.log(x)
