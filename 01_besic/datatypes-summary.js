// 2 type of data
// 1 primitive
// 2 non primitive (Reference)



//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
    // console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Undefined = "undefined"
// Null = "object"
// Boolean = "boolean"
// Number = "number"
// String = "string"
// Object (native and does not implement [[Call]]) = "object"
// Object (native or host and does implement [[Call]]) = "function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
// function = function
// Symbol = Symbol




//***************************************************/



//2 type of memory
// 1 stack [primitive] --{copy this value}
// 2 heap  [Reference (Non primitive)] -- {original value}

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
// console.log(userTwo.email);

let a = 1
let b = a
console.log(b);