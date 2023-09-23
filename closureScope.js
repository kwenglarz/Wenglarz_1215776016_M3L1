function outerFunction() {
    let closureVariable = "Closure Scope";
    // This variable is accessible to the inner funciton due to closure
    return function innerFunction() {
        console.log(closureVariable);
        //Can access the outer funcitons variables
    }
}
let newfunction = outerFunction();
newfunction();
// Prints Closure Scope