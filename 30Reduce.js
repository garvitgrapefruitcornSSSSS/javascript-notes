const mynums = [1, 2, 3, 4, 5, 6, 7];

const sum = mynums.reduce(function (acc, nums) {
  console.log(`acc: ${acc}, nums: ${nums} `);
  return nums + acc;
}, 7);
console.log(sum);

// By arrow function

const sum_1 = mynums.reduce((nums, acc) => acc + nums, 0);
console.log(sum_1);

const shopping_cart = [
  {
    course: "webdev",
    price: 6000,
  },
  {
    course:"datascience",
    price:9000
  },
  {
    course:"cloud",
    price: 12000
  }
];

const sum_of_cart = shopping_cart.reduce((acc,nums)=>acc+nums.price,0);
console.log(sum_of_cart);


