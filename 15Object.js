// const tinderuser = new object()/*using singelton method */
// const tinderuser = {}     /* Using literals method */

// // console.log(tinderuser);

// tinderuser.id = 134;
// tinderuser.name = "Garvit";
// tinderuser.isloggedin = false;

const tinderuser = {}

tinderuser.name = "garvitmodi4"
console.log(tinderuser.name);


const regularuser ={
    fullname:{
        username:{
        firstname: "Garvit",
        lastname: "Modi"
        }

    }
}
console.log(regularuser.fullname.lastname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// console.log (obj3) 
// /*in this type of array the result we get we get like array in the array for takle this problem we use this mehod */

// const obj3 = Object.assign({}, obj1 , obj2) 
//  Important for interview.
// console.log(obj3);

// // in this {} work as a Target and other element work as a source.

// But gener5ally we use Spread method
const obj3 = {...obj1,...obj2};
console.log(obj3);  /*SPread method */

const users = [
{
 id: 1,
 email:"hdhddj"
}

]
// object of array

users[1].email
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('is Loggedin'));
// This is used to wheather the object has the property or not.