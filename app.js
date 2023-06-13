// //A. Q + A
// // How do we assign a value to a variable?
// // Assignment operator (=)
// // declae with let/var/const give value with (=)
// // EX: let newVariable = document.querySelector('.variable')

// // How do we change the value of a variable?
// // REASSIGNMENT using the assignment operator (=)
// //recall variable and addign with (=)
// // variable = value
// // EX: object = orange
// //     object = apple (now object is apple)

// // How do we assign an existing variable to a new variable?
// // Assignment operator (=)
// // EX: myObj = 5
// //     yourObj = myObj


// // Remind me, what are declare, assign, and define?
// // DECLARE : let/const/var -> allocates memory(creates a data object and gives a name)

// // ASSIGN : assigns a value to an allocated memory (the declared variable)
// //        : right side is assignment

// // DEFINE : the variables have been initialized (gives it meaning(value))

// // What is pseudocoding and why should you do it?
// // fake code to organize the sequence of actions and instructions that's easy to understand

// // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// // case by case
// // 90% thinking about problem and 10% coding



// // B. Strings
// // For all other questions that involve writing code, you can solve them via the following instructions.

// // Create a variable called firstVariable
// // Assign it the value of the string "Hello World"
// // Change the value of this variable to some number
// // Store the value of firstVariable in a new variable called secondVariable
// // Change the value of secondVariable to any string.
// // What is the value of firstVariable?
// // Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// // ex: Hello, my name is Jean Valjean

// // ANSWER
// // step 1       let firstVariable
// // atep 2   let firstVariable = "Hello World";
// // step 3       let firstVariable = 5;
// // step 4       let secondVariable = firstVariable
// // step 5       let secondVariable = "Any String"
// // step 6       value of firstVaribale is 5;
// // step 7       let yourName = "Lynette Cargo"
// // step 8       let expression1 = "Hello, my name is " + yourName
// // step 9       let expression2 = `Hello, my name is ${yourName}`

// // // C
// // const a = 4;
// // const b = 53;
// // const c = 57;
// // const d = 16;
// // const e = 'Kevin';

// // console.log(a < b);
// // console.log(c > d);
// // console.log('Name' === 'Name');
// // // FOR THE NEXT TWO, USE ONLY && OR ||
// // console.log(true || false);
// // console.log(false && false && false && false && false || true);
// // console.log(false === false)
// // console.log(e === 'Kevin');
// // console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// // console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// // console.log(48 == '48');

// // D. The farm
// // Declare a variable animal. Set it to be either "cow" or something else
// let animal = "cow"
// // Write code that will print out "mooooo" if the it is equal to cow
// if(animal === "cow"){
//     console.log('mooooo')
// }
// // Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// if(animal === "cow"){
//     console.log('mooooo')
// } else {
//     console.log("Hey! You're not a cow.")
// }
// // Commit


// // E. Driver's Ed
// // Make a variable that holds a person's age; be semantic
// // Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


// let age = 57;
// if(age >= 16){
//     console.log("Here are the keys!")
// } else {
//     console.log("Sorry, you're too young.")
// }

// // ----- LOOPS

// // A. The basics
// // Write a loop that will print out all the numbers from 0 to 10, inclusive

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }
// // Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for( let i= 12; i <= 4000; i+=3 ){
//     console.log(i)
// }

// // B. Get even
// // Print out the numbers that are within the range of 1 - 100
// for(let i = 1; i < 100; i++){
//     console.log(i)
// }
// // Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for(let i = 1; i < 100; i++){
//     if(i % 2 === 0){
//         console.log(`${i} <-- is an even number`)
//     } else {
//         console.log(i)
//     }
// }
// // shortcut
// for(let i = 1; i < 100; i++){
//     i % 2 ? console.log(i) : console.log(`${i} <-- is an even number`)
// }


// // C. Give me Five
// // For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for(let i = 0; i <=100; i++){
//     if(i % 5 === 0){
//         console.log("I found a number. High five!")
//     } else {
//         console.log(i)
//     }
// }
// //shortcut
// for(let i = 0; i <=100; i++){
//     i % 5 ? console.log(i) : console.log("I found a number. High five!")
// }
// //shortcut
// for(let i = 0; i <=100; i++){
//     i % 5 === 0 ? console.log("I found a number. High five!") : console.log(i)
// }

// // 1. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// for (let i = 1; i <= 100; i++){
//     if (1 % 3 === 0){
//         console.log("I found a number. Three is a crowd")
//     } else if (i % 5 == 0){
//         console.log("I found a number. High five!");
//     } else {
//         console.log(i)
//     }
// }
// // 2. For numbers divisible by both three and five, be sure your code prints both messages
// for (let i = 1; i <= 100; i++){
//     // if ((i % 3 == 0) && (i % 5 ==0))
//     if (1 % 15 == 0) {
//     console.log("Fizz Buzz")
//     } else if (i % 3 == 0) {
//         console.log("I found a number. Three is a crowd");
//     } else if (i % 5 == 0){
//         console.log("I found a number. High five!");
//     } else {
//         console.log(i);
//     }
// }

// for(let i = 0; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`${i} I found a number. Three is a crowd. I found a number. High five!`)
//     } else if (i % 3 == 0) {
//         console.log("I found a number. Three is a crowd");
//     } else if (i % 5 == 0){
//         console.log("I found a number. High five!");
//     } else {
//         console.log(i);
//     }
// }

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bank_account = 0;
// for(let i = 1; i <= 10; i++){
//     bank_account += i;
// }
// console.log(bank_account) // 55
// // Check your work! Your bank_account should have $55 in it.

// // You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let bank_account2 = 0;
// for(let i = 1; i <= 100; i++){
//     bank_account2 += i * 2;
// }
// console.log(bank_account2)
// Check your work! Your bank_account should have $10,100 in it.

// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
// Elements

// Do Arrays guarantee those things will be in order?
// No

// What real-life thing could you model with an array?
// let movies = ["Ratatouille", "Big Hero 6", "Moana"]

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
// let quotes = ["This is Sparta!", "There's no place like home", "I'm the king of the world!"]

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// randomThings = [1, 10, "Hello", true]
// randomThings[0]

// Change the value of "Hello"to "World"
// randomThings[2] = "World"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ourClass[2]
// Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat"
// Add a new element, "Cloud City" to the array
// ourClass.push("Cloudy City")
// console.log(ourClass)

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// const myArray = [5, 10, 500, 20]
// myArray.push("Aegon")
// myArray.push("Dinner")
// // Remove the 5 from the beginning of the array.
// myArray.shift([0])
// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley")
// // Remove the string of your choice from the end of the array.
// myArray.pop("Dinner")
// console.log(myArray)
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// console.log(Array.prototype.reverse(myArray))
// console.log('prototype reverse method:', myArray)


// myArray.reverse()
// console.log(console.log('reverse method:', myArray))
// // F. Biggie Smalls
// // Create a variable that contains an integer.
// let int = 3

// // Write an if ... elsestatement that:
// if(int < 100){
//     console.log('little number')
// } else {
//     console.log('big number')
// }

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
// if(int < 100){
//     console.log('little number')
// } else if(int > 10){
//     console.log('big number')
// } else {
//     console.log('monkey')
// }

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
// //   H. What's in Your Closet?
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// //   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// //   Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// // kristynsCloset.splice(6, 0, "raybans")
// //   Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// // kristynsCloset[5] = "stained knit hat"
// //   Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// let shirt = thomsCloset[0][0]
// //   In the same way, access one item from Thom's pants array.
// let pants = thomsCloset[1][0]
// //   Access one item from Thom's accessories array.
// let accessories = thomsCloset[2][2]
// //   Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${accessories}!`)
// //   Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = "Footie Pajamas"



// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
const printGreeting = (name) => {
    return `Hello there, ${name}`
}
console.log(printGreeting("Slimer"));

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
    return `${name} is cool!`
}
console.log(printCool("Captain Reynolds"));

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
const calculateCube = (num) => {
    let i = Math.pow(num, 3);
    return i;
}
console.log(calculateCube(5));

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// The vowel could be upper or lower case.
// Test your function on every vowel and make sure it's working.
// In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

const isVowel = (letter) => {

    vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    vowels.forEach((char) => {
            if(char === letter.toLowerCase()){
                    console.log(`${letter} is a vowel`)
            } 
})}
isVowel("a");
isVowel("E");

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings).
// // The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (...args) => {
    return args.map(text => text.length)
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings.
// The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (arr) => {
    return arr.map(function(text){
        return text.length;
    });
}


console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them.
// If all numbers are the same, it doesn't matter which one is returned.
// If the two largest numbers are the same, one of them should be returned.
// Be sure to test it with larger values in each of the three locations.
// does not use Math.max()

const maxOfThree = (a, b, c) => {
    if (a > b && a > c){
        return a;
    } else if (b > a && b > c){
        return b;
    } else if (c > a && c > b){
        return c;
    }
}

console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings.
// The method should return the longest word in the array.
// In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = function(word) {
    let wordSplit = word.split(' ');
    let longWord = 0;

    for(let i = 0; i < wordSplit.length; i++){
        if(wordSplit[i].length > longWord){
            longWord = wordSplit[i].length;
        }
    }
    return longWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Objects
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased.
// Set the value of purchasedto an empty array [].
// Set the other values to whatever you would like.