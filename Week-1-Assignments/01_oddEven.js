// Creating a function
function isOddOrEven(number) {
    //check if the number is divisible by 2
    if (number % 2 == 0){
        return "Even"; //divisible by 2 -> Even
    }else{
        return "Odd"; //not divisible by 2 -> Odd
    }
}

//2. Declare and initiative a variable
let num = 15;

//4. Call the function and print the result
console.log("The number is: ", isOddOrEven(num))