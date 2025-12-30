// in javascript official documentation the datatype is mainly classiy in two types primitive and non primitive.
// Primitive is 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint(call by value)

// non - primitive
// 3 types: array , function,object. (call by reference)

const item = null;
// const score;  agar isko aise hi khali chod dete hain to iska matlab ye hai ki ye undefined hai.
//undefined

const id = Symbol('113');
const anotherid = Symbol('113');
console.log(id===anotherid);  
// Symbol ka yhi feature hai dono mei same value declare krne pr bhi ye dono same nhi honge.
// Symbol is generally used to declare unique value.
// js is dynamically typed lanaguage bcoz no need to declare datatype.


// const heroes = [ "Shaktiman", "Tonystark", "Captain"];
console.log(heroes);
const heroes = ["rahul","Amit","Ashok"];
let myObj =
{
    name: "Garvit",
    age : 21 ,
}
const myfunction = function(){
    console.log("hello world");
}
myfunction();

const ministers = ["cm","pm","dm"];
let myobj2 =
{
    name: "Amit",
    Age: 35
}
console.log(myobj2.name,myobj2.Age);

// ========================= Call by value =======================================

/* 
A copy of value is passes to the function . changes inside the function do not effect the 
orignal value

function change(x){
    let x = 10
}
   let y = 20;
   change(y)
   console.log(y);  20
*/

// =============================call by reference ======================================

/* 
A reference of the value is passed to the function . changes inside the function do effect 
the orignal value.
  function myfun(array){
    array[0] = 100
  }

  const nums = [10,20,30]
  myfun(nums)
  console.log(nums[0]) 100

  function changename(obj)
  {obj.name ="Adiya"}

  myobj = {
  name:"GARVIT",
  Age: 22
  
  }
  changename(myobj)
  console.log(myobj.name)

 */

