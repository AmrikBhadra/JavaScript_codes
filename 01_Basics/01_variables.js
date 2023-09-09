//declaring a constant
const accountId = 144553  //we cannot change this value as it onstant

// declaring variables
let accountEmail = "abc@gmail.com"  // LET IS USED NOWDAYS to avoid scope issues
var accountPassword = "12345"

/*
    Prefer not to use var
    because of issue in block scope and console scope
*/


accountCity = "Jaipur" // not a good way, but we can create variable withoutr declaring let/var

let accountState; // if we keep this as it is and print, output: undefined

// accountId = 2
accountEmail = "hdc@gmail.com"
accountPassword = "abc123"
accountCity = "Pune"

console.log(accountId);  //use to print single item

// if you want to display values of multiple variables at a time then use
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]) // every thing will be displayed in the form of a table