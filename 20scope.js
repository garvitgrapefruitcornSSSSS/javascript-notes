function one(){
    const username = "Garvit"
    function two(){
        const website = youtube;
        console.log(username)


    }
    console.log(website)

}

// one() this give error bcoz function one behave like global for two.

if(true){
    const username = "Amit"
    if(username === "Amit"){
        const website = "Youtube"
        console.log(website + username)
    }
}
// console.log(website) This give error bcoz out of scope.

//  =============================Interestig=====================

function addone(num){
    return num + 1
}

// new method

const addtwo = function (num){
    return num +2
}