


function sayMyName (){
console.log("M");
console.log("U");
console.log("S");
console.log("A");
}

// sayMyName();

// function addTwoNumbers (Number1, Number2) {
//     console.log(Number1 + Number2);
// }

// function addTwoNumbers (Number1, Number2) {
//     let result = Number1 + Number2
//     return result
// }

// function addTwoNumbers (Number1, Number2) {
//     let result = Number1 + Number2
//     return result
//     console.log("Musa");
// }


// function addTwoNumbers (Number1, Number2) {
//     let result = Number1 + Number2
//     console.log("Musa");
//     return result  //return block for underline
// }

// function addTwoNumbers (Number1, Number2) {
//      return Number1 + Number2

// }



// addTwoNumbers();
// addTwoNumbers(4, 5);
// addTwoNumbers(4, "5");
// addTwoNumbers("4", 5);
// addTwoNumbers(4, "a");
// addTwoNumbers(4, null);

// const result = addTwoNumbers(4, 5);  //checking for comment out

// console.log("result: ", result); //checking for comment out


// function loginUserMessage (username) {
//     return `${username} just logged in`
// }


// loginUserMessage("Musa")  // not running for exgecute
// console.log(loginUserMessage("Musa"));
// console.log(loginUserMessage());
// console.log(loginUserMessage(""));

// function loginUserMessage (username) {
//     if(username === undefined){
//         console.log("Please enter a username");
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage (username) {
//     if(username === undefined){
//         console.log("Please enter a username");
//         return //return block for underline
//     }
//     return `${username} just logged in`
// }


function loginUserMessage (username = "Sayem") {
    if(!username){
        console.log("Please enter a username");
        return //return block for underline
    }
    return `${username} just logged in`
}

// ! convat true to folse , folse to true

// console.log(loginUserMessage());
// console.log(loginUserMessage("Musa"));




function calculateCartPrice (num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400));


function calculateCartPrice (...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400));


function calculateCartPrice (val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 600));



function calculateCartPrice (val1, val2, val3, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 600));




const user = {
    username : "Musa ",
    price : 199
}


function handleObject (anyObject){
    console.log(`username is: ${anyObject.username}and price is:
     ${anyObject.price}`);
}


// handleObject(user)
// handleObject({
//     username : "Sayem ",
//     price : 399
// })

const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));