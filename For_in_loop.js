// for_in_loop: it is used to iterate over key of an object.
// Syntax:
// for(key in object){
//     // code
// }

let student = {
    Name: "Garvit",
    Age: 19,

}

for(let key in student){
    console.log(key,":" ,student[key])
}

// We can use forin in array also but try to avoid it.

let userPermissions = {
    read: true,
    write: false,
    delete: false
};

for (let permission in userPermissions) {
    if (userPermissions[permission]) {
        console.log(permission, "allowed");
    }
}

