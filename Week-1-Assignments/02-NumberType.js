//1. Create a function that takes a number as a parameter
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

//2. declare and initiative a variable
let num1 = -10;
let num2 = 5;

//4. call the function and print the result
console.log("The number is: ", num1, "->", checkNumberType(num1));
console.log("The number is: ", num2, "->", checkNumberType(num2));
