// const userEmail = "musa@gmail.com";
// const userEmail = "";
const userEmail = [];



// if (userEmail) {
//     console.log("got user email");
// } else {
//     console.log("don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0 ) {
//     console.log("array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");
}

// false = 0 //true,
// false = '' //true
// 0 = "" //true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 15
// val1 = undefined ?? 20
val1 = null ?? 25 ?? 30

// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100 
// iceTeaPrice >= 80 ? console.log("less then 80"): console.log
// ("greater then 80");
iceTeaPrice <= 80 ? console.log("less then 80"): console.log
("greater then 80");
