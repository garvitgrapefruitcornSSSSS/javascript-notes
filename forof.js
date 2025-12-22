// for of: it is used to iterate values of iterable like array,string,set,nodelist,Map
// Syntax:
for (variable of iterable) {
    // code
}


const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num)
}

const greeting = "hello garvit"
for(const each of greeting){
    console.log(each)
    
}

const myarray = [2,3,4,5]
sum = 0

for(const num of myarray){
    sum += num

}

console.log(sum)

// for of loop does not directly work with object.
// use object.values

let obj = {name:"Garvit",Age:19}

for(var num of Object.values(num)){
    console.log(num)
}
