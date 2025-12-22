// REDUCE: it is an array which gives a sinle value from a given array.the single value can be array, string ,sum,number.
/*
Array.reduce((accumulator,currentvalue,index,array)=>{
    return acc+currenvalue},initial value)


*/

let number = [10,20,30,40]

let newnumbers = number.reduce((acc,num)=>acc+num,0)
console.log(newnumbers)

let cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 50 },
    { item: "Bag", price: 800 }
];

newcart = cart.reduce((acc,val)=>acc+val.price,0)

console.log(newcart)