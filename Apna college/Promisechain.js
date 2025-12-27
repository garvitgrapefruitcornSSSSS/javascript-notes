function asyncfunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("promise fullfilled");
            resolve("Promise fullfilled Successfully")
        },4000
        )
    })
}
function asyncfunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("promise fullfilled");
            resolve("Promise fullfilled Successfully")
        },4000
        )
    })
}
/* console.log("Fetching data one")
let p1 = asyncfunction1();

p1.then((result)=>{
    console.log(result)
})
console.log("Fetching data two")

let p2 = asyncfunction2();

p2.then((result)=>{
    console.log(result)
}) */

// is case mei dono data ek sath print honge but we want second after first so we use chaining.
/* 
console.log("Fetching data one......")

let p1 = asyncfunction1();

p1.then((result)=>{
    console.log("fetching data2");
    let p2 = asyncfunction2();
    p2.then(()=>{

    })
}) */

// Tackle of callback hell with promise chaining:

function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("Success")
        },3000)
    })
}

/* getdata(123,()=>{
    getdata(345,()=>{
        getdata(456)
    })
}) */

/* getdata(1).then((result)=>{
    console.log(result)
    getdata(2).then(()=>{
        console.log(result)
    })
}) */

// More better Method

/* getdata(1).then(()=>{
    return getdata(2)
}).then(()=>{
    return getdata(3)
}).then((result)=>{
    console.log(result)

}) */




