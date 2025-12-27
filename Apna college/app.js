// // setTimeout: ye ek function hota hai jo function ka ek time ke bad call krta hai.
// /*  function hello(){
//     console.log("hello")
//  }

//  setTimeout(hello,3000)
//  setTimeout(()=>{
//     console.log("hello")
//  },3000) */

// //  Callback Function

// function sum(a,b){
//    console.log(a+b)
// }

// function calculator(a,b,Callback){
//    Callback(a,b)
// }

// // calculator(1,2,sum);
// calculator(1,1,(a,b)=>{
//    console.log(a+b)
// })

/* const hello = () =>{
   console.log("hello")
}

setTimeout(hello,3000) */




/* function getdata(dataid){
   console.log("data" , dataid)
}

setTimeout(getdata,3000); */


/*
Callback hell

function getdata(dataid,getNextData){
   setTimeout(()=>{
      console.log("data",dataid);
      if(getNextData){
         getNextData();
      }
   },3000)
 }

getdata(123,()=>{
   getdata(345,()=>{
      getdata(456,()=>{
         getdata(789)
      })
   })
}); */



 




