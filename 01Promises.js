// ============================ BASIC SYNTAX ===========================================

let myPromise = new Promise(function(resolve, reject) {
  // Do some async work
  let success = false;

  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise
  .then(function(result) {
    console.log(result); // Runs if resolved
  })
  .catch(function(error) {
    console.log(error); // Runs if rejected
  })
  .finally(function() {
    console.log("Promise finished (either success or failure)");
  });

//   ==============================================================================================

const promiseone = new Promise(function(resolve,reject){
    setTimeout (function(){
        console.log("Async is completed");
        resolve()
    },3000)
}
)

promiseone.then(function(){
    console.log("result");
})


//    =============== New promise ==========================================

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username:"Amit", Age : 70})
    }, 4000);
}).then(function(user){
    console.log(user);
})

 const promise_two = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let error = true;
    if (!error) {
      resolve({ username: "Garvit", Age: 22 });
    } else {
      reject("No return");
    }
  }, 1000);  // ✅ delay placed correctly
});

promise_two
  .then(function(user) {
    console.log(user);
    return user.username;
  })
  .then(function(username) {
    console.log(username);
  })
  .catch(function(error) {
    console.log(error);
  })
  .finally(function() {
    console.log("The promise is either resolved or rejected");
  });


  const promise_three = new Promise (function(resolve,reject){
    setTimeout(function(){
      let error = true;
      if(!error){
        resolve({language:"java",domain:"Dev"})
      }
      else{
        reject("NO return")
      }

    },2000)
  })


  async function promise_three_consume(){
    try{
      const respone = await promise_three
      console.log(respone);
    }
    catch(error){
      console.log(error);

    }
  }

  promise_three_consume();

  async function getAllUser(){
    try{
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await result.json();
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }

  getAllUser();
  