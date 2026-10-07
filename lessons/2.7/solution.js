// 1
// analyse the problem, like at the primary school:
// what are the key data?
// - amount to pay
// - tip percentage
// - number of people

// what are the key operations?
// - compute tip amount
// - compute total amount to pay
// - compute amount per person

// 2
// data --> variables
// operations --> operators

// 3
// create variables with let
let amountToPay;
let tipPercentage;
let numberOfPeople;

// create expressions that use variables and operators

// 4
// we use intermediate variables
let tipAmount = amountToPay * tipPercentage / 100;
let totalAmountToPay = amountToPay + tipAmount;
let amountPerPerson = totalAmountToPay / numberOfPeople;

console.log(amountPerPerson);

// 5
// assign values to variables and see the result

// 6 
// check that the result is correct if input values change



