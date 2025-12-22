// Filter: it is an array method which give a new array that satisfy a condition.
/*Syntax: 

Array.filter((value,index,array)=>{
    return condition;
})
> it return a new array and orignal array stay unchanged.
*/

const myarray = [10,20,30,40]

newarray = myarray.filter((num)=>num>20)

console.log(newarray)

let users = [
    { name: "A", age: 17 },
    { name: "B", age: 22 },
    { name: "C", age: 19 }
];

users_name = users.filter((data)=>data.age>=22)
console.log(users_name)