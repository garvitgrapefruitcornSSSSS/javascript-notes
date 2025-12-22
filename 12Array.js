const myarray =  [0,1,2,6,4,5];
// const myarray1 = ["shaktiman","ironmen","tony"];

const hello = new Array(0,1,2,3,4,5)
console.log(typeof hello);
console.log(myarray[3]);

// Array Methods 

// myarray.push (9);
// myarray.pop() it just eliniate last element of array.

// myarray.unshift(3); Add a element at the beginning of array.
// myarray.shift(); Removes the first element from the array.
// console.log(myarray)
// console.log(myarray.includes(9)); check the element is present or not.
// console.log(myarray.indexOf(3));give the position of array.
// const Joinedarray = myarray.join(); Add all the element of array into a string.
// console.log(Joinedarray);



// Slice ,  splice 
 
console.log("A", myarray);
const mynewarray1 = myarray.slice(1,3);
console.log(mynewarray1);

console.log("B",myarray);
const mynewarray2 = myarray.splice(1,3);
console.log(mynewarray2);

// A shallow copy makes a new object, but it only copies the top-level values.

// If the object has another object/array inside it, the inner one is still linked (shared) with the original.

// So changing inner things will also change the original.


// A deep copy makes a new object and also copies everything inside, including nested objects/arrays.

// No links to the original remain.

// Changing one does not affect the other.

// let ar = [1, 2, 3, 4, 5];
// let newAr = ar.slice(1, 4);

// console.log(newArr); // [2, 3, 4]
// console.log(arr);    // [1, 2, 3, 4, 5] (original unchanged)

/* array.splice(start, deleteCount, item1, item2, ...)
| Parameter           | Meaning                            |
| ------------------- | ---------------------------------- |
| `start`             | Index position where changes begin |
| `deleteCount`       | How many elements to remove        |
| `item1, item2, ...` | (optional) New elements to insert  |
*/

// let arr = [1, 2, 3];
// arr.splice(1, 0, 10, 20); // at index 1, remove 0, add 10 & 20

// console.log(arr); // [1, 10, 20, 2, 3]

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2); // remove 2 elements starting at index 1

// console.log(arr); // [1, 4, 5]




 



