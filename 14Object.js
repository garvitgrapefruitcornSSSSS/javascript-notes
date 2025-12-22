// Singelton method: when we use constructor to create object.
// Object literals(is se singelton nahi banata)

// Object.create (this is the method to create object using constructor is called sigelton)

const mysymbol = Symbol("key1");


// This is literal method.
const Js_user = {
Name: "Garvit",
"Full name": "Garvit modi",
email: "garvitmosi333@gmail.com",
Age: 21,
[mysymbol]: "key1",
Location: "Jaipur",
isloggedin: false,
}

// console.log(Js_user.email);
// console.log(Js_user["Full name"]); in this type of data like "Full name " we can't use dot feature of obj.
// console.log(Js_user["email"]);
// console.log(Js_user[mysymbol]);

// Js_user.email = "dooffl98@gmail.com";
// console.log(Js_user["email"]);
// Object.freeze(Js_user); if we want that anybody can't change the value.
// Js_user.email = "rooffl98@gmail.com";
// console.log(Js_user.email);
 
Js_user.greeting =function(){
    console.log("hello js user")
}
Js_user.greetingone = function(){
    console.log(`hello js user,${this.email}`);

}
console.log(Js_user.greeting());
console.log(Js_user.greetingone());


