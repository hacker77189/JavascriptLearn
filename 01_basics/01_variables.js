const accountId = 144553
let accountEmail = "aminhaj774@gmail.com"
var accountPassword = "121"
accountCity = "Deoghar"

//accountId = 2 // not allowed

accountEmail = "abc@3221"
accountPassword = "324354"
accountCity = "Nagpur"

console.log(accountId);

/*
  never use var because of issue in block scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity])
