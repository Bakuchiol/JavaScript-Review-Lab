//A. Q + A
// How do we assign a value to a variable?
// Assignment operator (=)
// declae with let/var/const give value with (=)
// EX: let newVariable = document.querySelector('.variable')

// How do we change the value of a variable?
// REASSIGNMENT using the assignment operator (=)
//recall variable and addign with (=)
// variable = value
// EX: object = orange
//     object = apple (now object is apple)

// How do we assign an existing variable to a new variable?
// Assignment operator (=)
// EX: myObj = 5
//     yourObj = myObj


// Remind me, what are declare, assign, and define?
// DECLARE : let/const/var -> allocates memory(creates a data object and gives a name)

// ASSIGN : assigns a value to an allocated memory (the declared variable)
//        : right side is assignment

// DEFINE : the variables have been initialized (gives it meaning(value))

// What is pseudocoding and why should you do it?
// fake code to organize the sequence of actions and instructions that's easy to understand

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// case by case
// 90% thinking about problem and 10% coding



// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// ANSWER
// step 1       let firstVariable
// atep 2   let firstVariable = "Hello World";
// step 3       let firstVariable = 5;
// step 4       let secondVariable = firstVariable
// step 5       let secondVariable = "Any String"
// step 6       value of firstVaribale is 5;
// step 7       let yourName = "Lynette Cargo"
// step 8       let expression1 = "Hello, my name is " + yourName
// step 9       let expression2 = `Hello, my name is ${yourName}`

// // C
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
if(animal === "cow"){
    console.log('mooooo')
}
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
if(animal === "cow"){
    console.log('mooooo')
} else {
    console.log("Hey! You're not a cow.")
}
// Commit

