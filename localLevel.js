function displayVar() {
    let localLevelVariable = "Local Level";
    // This is a local level variable
    console.log(localLevelVariable);
}

displayVar(); // Prints Local Variable
console.log(localLevelVariable);
// ReferenceError localLevelVariable is not defined