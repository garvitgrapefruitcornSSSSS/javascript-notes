console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
// console.log(2!=1); This is not equal comparision.

// The output of all this operatio are in the form of boolean expression.

console.log("2">1);
console.log("02">1);
// When comparing a string with a number using > (or <, <=, >=),
//  JavaScript converts the string to a number (type coercion).


// Relational operators (>, <, >=, <=):

// Convert both sides to numbers, except for undefined which becomes NaN.

// Then perform numeric comparison.

// Equality (==):

// Has its own rules (loose equality).

// null is only equal to undefined (and itself), not to 0.

// undefined is only equal to null (and itself), not to 0.

console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined>0);
console.log( undefined==0);
console.log( undefined>=0);

// Strict Comparison (===)

// It checks both value AND type.

// No type conversion happens.

// Example:

console.log(2 === "2");    // false (number vs string)
console.log(true === 1);   // false (boolean vs number)
console.log(null === undefined); // false (different types)
console.log(2 === 2);      // true (same type and value)



