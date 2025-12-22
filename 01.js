const accountid = 14562
let accountEmail = "garvitmodi899@gmail.com"
var accountPassword = "12345"
accountcity = "jaipur"

accountEmail = "garvit78@gmail.com"
accountPassword = "34567"
accountcity = "nagpur"


console.log(accountid);
console.table([accountid,accountEmail,accountPassword,accountcity])    
// this is the method to write data easily in one string
// {} this curly braces is also known as scope.
/*prefer not to use var due to scope lock*/
console.table([accountEmail,accountPassword,accountid])
