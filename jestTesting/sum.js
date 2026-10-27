// function multiply(x,y){
//   return x * y;
// }

// // Expoorting the module so thati can import it in sum.test.js
// module.exports = multiply

function myFunction(input){
  if(typeof input !== "number"){
    throw new error("Invalid Input")
  }
}

// Expoorting the module so thati can import it in sum.test.js
module.exports = myFunction;