
// (...num1) rest operator
function calculatecartprice(...num1){
return num1
}
console.log(calculatecartprice(200,400,600))

// Object passing in function

user = {
    Name: "Amit",
    Age: 35,
    Salary: 10000
};

function handleObject(anyobject){
    console.log(`username is ${anyobject.Name} and age is ${anyobject.Age}`)

}
//  handleObject(user);
 handleObject({
    Name: "Rahul",
    Age: 90
 })

//  Array passing in function.

const myArray = [100,200,300];

function returnThirdValue(getArray){
    return getArray[2]
}
console.log(returnThirdValue(myArray));