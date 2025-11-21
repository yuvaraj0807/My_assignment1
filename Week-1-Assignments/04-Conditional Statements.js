// a Function LaunchBrowser using if-else
function LaunchBrowser(browserName) {

    //convert to lowercase to avoid case issues
    browserName = browserName.toLowerCase();

    //If browser is Chrome
    if (browserName == "chrome"){
        console.log("Launching Chrome Browser...")
    }
    //Otherwise
    else{
        console.log("Launching Default Browser...")
    }   
}

//b) Function runTests using swith-case
function runTests(testType) {
 
    // Convert to lowercase
    testType = testType.toLowerCase();

    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests...");
            break;

        case "sanity":
            console.log("Running Sanity Tests ...");    
    
        case "regression":
            console.log("Running Regression Tests...")
            break;

        default:
            console.log("Running Smoke Tests... (Default)");
            break;
    }
}

//Calling the function
LaunchBrowser("Chrome");
runTests("Sanity");