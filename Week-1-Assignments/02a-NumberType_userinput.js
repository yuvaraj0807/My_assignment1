//import prompt-sync to read user input
const prompt = require("prompt-sync")();

//1. Function to check number type
function checkNumberType(number) {

    //3. Conditional statements to check positive, negative, or zero
    if (number > 0){
        return "Positive";
    }else if (number <0){
        return "Negative";
    }else{
        return "Zero";
    }
    
}

//2. Get user input
let userInput = prompt("Enter a number: ");

//Convert the input string to a number
let num = Number(userInput);

//4. call the function and print the result
console.log("The number", num, "is", checkNumberType(num));
