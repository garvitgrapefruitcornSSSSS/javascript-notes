/*A function in JavaScript is a block of reusable code that performs a specific task. It helps keep your
code organized, reduces repetition, and makes it easier to debug.*/

// Function is a key word.
// saymyname is the reference.
// () is the execution.

function saymyname() {
    console.log("G");
    console.log("A");
    console.log("R");
    console.log("V");
    console.log("I");
    console.log("T");
}
// saymyname()

function addtwonumber(number1, number2) {
    console.log(number1 + number2)
}
addtwonumber(3, 4);

function addtwonumber(number1, number2) {
    let result = number1 + number2
    return result;

}

const result = addtwonumber(4, 6);
console.log("Result:", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter the username")
    }

    console.log(`${username},just logged in`)
    return 
}
loginUserMessage("Amit")

// When we declare function like function saymyname() than the detail we pass in the bracket 
// it called parameter. and when i call than it called argument.

// function declaration: jaise ham normally function declare krte hain;

greet (); /* Hoisting is allowed */

function greet(){
    console.log("hello.....")
}

let gstcalculator = function(amount){
    console.log(amount*0.18)

}

gstcalculator(456); /* hoisting is not allowed */



