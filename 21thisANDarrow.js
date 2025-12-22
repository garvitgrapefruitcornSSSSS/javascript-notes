user = {
    username: "Garvit",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}  welcom to the website`);
    }
}

// user.welcomemessage();

// user.username = "Amit";
// user.welcomemessage();

// console.log(this)

// ============================

// function chai(){
//     let username = "Garvit"
//     console.log(this.username)
// }
 
// chai()

// ==========Arrow function============================

const chai =  () => {
    let username ="Garvit"
    console.log(this.username);
}

// Arrow function ke andar this nahi hota.

const addtwo = (num1,num2) =>{
    return num1 + num2
}

console.log(addtwo(3,5));