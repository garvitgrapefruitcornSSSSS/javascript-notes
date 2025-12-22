// for each loop:  it is an array method used to loop through each element of an array , it runs a 
// functin once for each element.

/*
Syntax:

array.forEach(function(value, index, array) {
    // code
});

 */

let numbers = [2,3,4]

numbers.forEach((num,index,array)=>{
    console.log(num,index,array)
})

let cart = [200, 400, 600];
let total = 0;

cart.forEach(price => {
    total += price;
});

console.log("Total =", total);
// Does not return new array. If you need a new array → use map()