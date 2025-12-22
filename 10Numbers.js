const score = 56;
console.log(score);

const balance = new Number(100);

console.log(typeof balance);

console.log(balance.toString());
console.log(balance.toFixed(1));
// .toFixed(n) = place n zeroes after point 
console.log(balance.toPrecision(1));

const newbalance = 167908999;
console.log(newbalance.toLocaleString('En-In'))

/*  MATH LIBRARY */

console.log(Math);
console.log(Math.abs(-4));
// Absolute means negative convert in positive.
console.log(Math.round(45.876));
console.log(Math.ceil(7.3));
console.log(Math.floor(5.8));
console.log(Math.min(45,76,23));
console.log(Math.max(67,45,24));
console.log(Math.random()*191);

