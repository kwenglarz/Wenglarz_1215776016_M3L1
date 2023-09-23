let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

module.exports = {add, subtract, multiply, divide};


// When node.js runs the module, it wraps the code inside a func with these parameters
// Becomes this when run
// (function(exports, require, module, __filename, __dirname){
//     let add = (x, y) => x + y;
    // let subtract = (x, y) => x - y;
    // let multiply = (x, y) => x * y;
    // let divide = (x, y) => x / y;

    // module.exports = {add, subtract, multiply, divide};
//})

//This is the same as the previous task but it is wrapped with a self invoking function with the parameters exports, require, module, __filename, __dirname.