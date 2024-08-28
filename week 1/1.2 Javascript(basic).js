        // 1. Variables

    // Variables are used to store data. In JavaScript, you declare variables using var, let, or const.

const name1 = "krishXankar";  // Variable that can be reassigned

let age = 18.5; // Constant variable that cannot be reassigned

var title = "Ghosh"; // Older way to declare variables, function-scoped

// console.log(name1);

// console.log(age);

// console.log(title);

        // Assignment #1 
    // Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let name2 ="GOJO"
const anime = "JJK";
var villen = "Geto"

// console.log(name2);

// console.log(anime);

// console.log(villen);

        // 2. Data types

let number = 42;             // Number

let string = "Hello World";  // String

let isActive = false;        
// Boolean

let numbers = [1, 2, 3];     // Array

// console.log(typeof number);

// console.log(typeof string);

// console.log(typeof isActive);

// console.log(typeof number);

        // 3. Operators

let sum = 10 + 5;          
// Arithmetic operator

let isEqual = (10 === 10); 
// Comparison operator

 let isTrue = (true && false);       
 //Logical operator

// console.log(sum);

// console.log(isEqual);

// console.log(isTrue); 

// ** The "&&" operator returns true only if both operands are true. If any of the operands is false, the result of the "&&" operation is false.

// ** true "&&" false: The first operand is true, but the second operand is false. Since both operands are not true, the entire expression evaluates to false.


// ### Logical OR (`||`) Operator

// ** The `||` operator returns `true` if **at least one** of the operands is true. It only returns `false` if **both** operands are false.

let isTrue2 = (true || false);

// console.log(isTrue2);

// ** `true || false` : The first operand is `true`, and since at least one operand is `true`, the entire expression evaluates to `true`.

// ** So, `isTrue` would be assigned the value `true`.

        // 4. Functions

// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call

// console.log(greet("krish"));

        // Assignment #2

    // Write a function sum that finds the sum of two numbers. 

    // Side quest - Try passing in a string instead of a number and see what happens?

function addresult(a,b){

   console.log(a+b);
   return;
}

// console.log(addresult(5,4));
     
// console.log(addresult("5",4));

// console.log(addresult(5,"4"));

        // 5. If/Else

function voting(age){
    if (age>18) {
        console.log("you are an adult");
        
    } else {
        console.log("soory minnion better luck next time");
        
    }
    return
}

console.log(voting(20));

        // Assignment#3

    // Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

let number2 = 5;

if (number2%2==0) {
    console.log(`${number2 }  is a even number`);
    
} else {
    console.log(`${number2} is a odd number`);
}

        // 6. Loops

// ** Here's a breakdown of the loop components:

// - `let i = 0`: Initializes the loop variable `i` to `0`.

// - `i < 5`: The loop continues as long as `i` is less than `5`.

// - `i++`: Increments `i` by `1` after each iteration.

// for (let i = 0; i <= 5; i++) {
        //     console.log(i); // Outputs 0 to 4


// ** The loop executes the `console.log(i)` statement for each value of `i`, resulting in the numbers `0` through `4` being printed. If you have any questions or need further clarification, feel free to ask!

        // Assignment#4

    // Write a function called sum that finds the sum from 1 to a number

    function sum3(number3) {
        let total = 0; // Initialize total to 0
        for (let index = 1; index <= number3; index++) { // Loop from 1 to number3
            total += index; // Add each number to total
        }
        return total; // Return the final total
    }
    
    console.log(sum3(5)); // Outputs 15, which is the sum of 1 + 2 + 3 + 4 + 5
    


