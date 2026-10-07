// 1 - toUpperCase
// we apply the procedure;
'Andrea'.toUpperCase()
// we apply the procedure and print the result
console.log('Andrea'.toUpperCase())

// 2
// applied to a string variable
// why is that different from the previous example?
// let userName = 'Andrea'
// console.log(userName.toUpperCase())
// different because this time we are not using the literal string,
// but a variable that contains the string.

// 3
// see in the example before that userName is unchanged after the method is applied
// let userName = 'Andrea'
// console.log(userName.toUpperCase())
// console.log(userName) // still "Andrea"

// 4
// solution 1: store into a new variable
// let newUserName = userName.toUpperCase()
// console.log(newUserName) // "ANDREA"

// 5
// is it the only solution?
// no we can update the variable userName with the new value
// userName = userName.toUpperCase()
// console.log(userName) // "ANDREA"

// 6
// given username "andrea", print: "Hello ANDREA"
// let userName = 'Andrea'
// userName = userName.toUpperCase()
// console.log('Hello ' + userName)

// 7
// given username "andrea", print: "andrea in uppercase is ANDREA"
let userName = 'Andrea'
let upperCaseUserName = userName.toUpperCase()
console.log(userName + ' in uppercase is ' + upperCaseUserName)

// 8
// see effects of solution 1 (creating a new variable) and solution 2 (updating the existing variable) for the exercises 6-7
// exercise 6: we can either create a new variable or update the existing one
// exercise 7:if we update userName we cannot use it anymore to print the original value!!