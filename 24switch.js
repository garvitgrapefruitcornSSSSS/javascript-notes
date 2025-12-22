// const month = 3;

// switch (month) {
//   case 1:
//     console.log("january");
//     break;
//   case 2:
//     console.log("february");
//     break;
//   case 3:
//     console.log("MARCH");
//     break;
//   default:
//     console.log("Invalid");
// }

// =================== Truthy value and Falsy value ========

// const userEmail = "garvitmodi333@gmail.com";

// if(userEmail){
//     console.log("getuseremail");
// }
// else{
//     console.log("Do not get");
// }

// Falsy value : false, 0 ,-0 , bigint , "" ,null, undefined,NaN
// truhy value: remain truthy, "0", "false", [] ,{}

// =========== To check the Array is empty or not ================

// const myarray = [2,4,6,7,7];

// if (myarray.length === 0){
//     console.log("Array is empty");
// }else{
//     console.log("Array is not empty");
// }


// ================= Check Object is empty or not ===================

// const myObj = {}

// if(Object.keys(myObj).length ===0){
//     console.log("Object is empty");
// }else{
//     console.log("Object is not empty");
// }




// ======== Null coalescing operator ?? (Null,unndefined) =========

let val1;

// val1 = 10 ?? null;
// val1 = null ?? 10;
// val1 = 5 ?? 10;
val1 = null ?? 10 ?? undefined;
console.log(val1);


// ================ terniary operator ========================
// condition ? true : false;

const coffeePrice = 100;
 
coffeePrice >= 80 ? console.log("Price greater than 80") : console.log("Price less than 80");
