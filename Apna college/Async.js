// Async fn automatically promise return krta hai.

/* async function hello(){
    console.log("hi")
}
hello(); */

function api(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data,"fullfilles")
            resolve("Success")
        },2000)
    })
}

async function getalldata(){
    await api(1)
    await api(2)
    await api(3)
    
}
getalldata();
