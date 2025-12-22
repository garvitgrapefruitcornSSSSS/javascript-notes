const course = {
    coursename: "js in hnd",
    price: "9999",
    courseinstructor: "Garvit"
}

// Destructure of object

// course.courseinstructor

const{courseinstructor:instructor } = course 
// Reaname variable.
const{coursename,price} = course
console.log(instructor);
console.log(coursename,price);

/*An API (Application Programming Interface) is a way for different software applications to communicate 
with each other. It defines a set of rules and protocols  that allow one program to request and exchange 
data with another.In curren time Api come in json and the format is object and json*/
