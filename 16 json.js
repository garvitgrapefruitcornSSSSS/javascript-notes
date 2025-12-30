const course = {
    coursename: "js in hnd",
    price: "9999",
    courseinstructor: "Garvit"
}

// Destructure of object

let {coursename,price} = course;
console.log(coursename)

// Renaming while destructuring
let {coursename:name,price:budget} = course;
console.log(name)

// Default values

let {country = "India"} = course;
console.log(country)


/*An API (Application Programming Interface) is a way for different software applications to communicate 
with each other. It defines a set of rules and protocols  that allow one program to request and exchange 
data with another.In curren time Api come in json and the format is object and json*/
