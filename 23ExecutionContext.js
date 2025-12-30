// this is a special keyword that refers to the object that is currently executing the code.
// Its value depends on where and how the code is run.

// this refers to the window object (in browser) or global object (in Node.js).

// ========== js Execution context ========

// {} GLobal exectuion context.
//  Function exection context.
// Eval execution context.

// Array.every()
/* 
array.every((element, index, array) => {
  return condition;
});

 */

const marks = [20,60,80]
const passes = marks.every(nums=>nums>18)
console.log(passes) /* True */

const passwithgrace = marks.some(nums =>nums>=50)
console.log(passes)