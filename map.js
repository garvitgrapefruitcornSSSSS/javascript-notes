/*  Map: map() is a built-in array method in JavaScript that is used to create a new array by
 applying a function to each element of an existing array.

✔ Key Idea

It does NOT change the original array.

It returns a new array with modified values.

array.map(function(element, index, array) {
   // return new value
})
*/

const numbers = [1,2,3,4,5]

const doubled = numbers.map((num) => num*3);
console.log(doubled);


// Trasforming data is the most common example.
const customer_list = [{name:"Garvit", purchase:9000},{name:"Ayush",purchase:10000}]

const modified = customer_list.map((u) =>u.name)
console.log(modified);


// How it works in real world:

const products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 80000,
    category: "mobile",
    inStock: true
  },
  {
    id: 2,
    title: "Samsung TV",
    price: 50000,
    category: "electronics",
    inStock: false
  }
];

const productCards = products.map((product) => {
  return {
    name: product.title,
    finalPrice: product.price + product.price * 0.18,
    stock: product.inStock ? "In Stock" : "Out of Stock"
  };
});

console.log(productCards);
