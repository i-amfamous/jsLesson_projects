// // Importing sum module
// const myFunction = require('./sum');
// const multiply = require('./sum')
// test('multiplies x and y nd equals 35', ()=>{
//   expect(multiply(5,7)).toBe(35);  //the results to expect 
// });


// /*---------------------------------
//             MATCHERS
// ---------------------------------*/

// //.toBe -- used for primitive values like no_s, booleans, strings
// test('ten plus fifteen is twenty-five', ()=>{
//   expect(10 + 15).toBe(25)
// });

// //.toEqual -- used for comparing values of objects or arrays
// test('Object Assignment', () => {
//   const data = { one: 1};
//   data[ 'two' ] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// //.toBeFalsy -- uChecks if a value is undefined
// test('check for falsy values', () => {
//   const n = null;
//   expect(n).toBeFalsy();
// })

// //.toBetruthy -- uChecks if a value is true
// test('check for Truthyy values', () => {
//   const n = 2;
//   expect(n).toBeTruthy();
// })

//.tooThrow() -- Error Handling using toThrow()
const myFunction = require('./sum')
test('toThrow Error handling', () => {
  expect(()=>{
     myFunction("hello");
  }).toThrow();
})
