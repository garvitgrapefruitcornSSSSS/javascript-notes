// Promises


/* let mypromises = new Promise ((resolve,reject)=>{
   console.log("I am a Promise")
   resolve("Success")
})
mypromises.then((result)=>{
    console.log(result)
}) */


// Api jo hai wo data nhi Promise retuen krti hai.

/* function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid)
            resolve("Success")
            if(getnextdata)
                getnextdata();
        },3000)

    })
} */

/* let getpromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("promise fullfilled")
        resolve("Success")
    })
}
let promise = getpromise();

promise.then((result)=>{
    console.log(result)
})

promise.catch(()=>{
    console.log("error")
}) */

