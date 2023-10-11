const  accountId = 687293
let accountEmail = "musa@gmail.com"
var accountPassword = "772266"
accountCity = "Dhaka"
let accountState;
// accountId = 687 // not allowed

accountEmail = "sayem@hc.com"
accountPassword = "772299"
accountCity = "rangpur"

console.log(accountId);
/* 
Prefer not usr var
Because of issues in the block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// console.table([accountId, accountEmail, accountPassword, accountCity]);