//1. Declare a const name as browserversion(global)
const browserVersion = "Chrome"; // assign value as chrome

//3. Create  a function by name getBrowserVersion
function getBrowserVersion() {

    //4. Check if browser is Chrome
    if (browserVersion == "Chrome"){

        //5. Declare a local variable using VAR (block variable)
        let browserVersion = "Local Var Version";
        console.log("Inside IF block:", browserVersion);
    }
    
    //print outside IF block
    console.log("Outside IF block:", browserVersion)
}

// 6. call the function
getBrowserVersion();

//print global variable
console.log("Global Variable: ", browserVersion)