// const a = 10
// let b = 20
// var c = 30

// var c = 40

let b = 100

if (true) {
    const a = 10
    let b = 20
    // var c = 30
    // c = 30
    // console.log("INNSR: ", a);

}

// var c = 40

// console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 1; i <= 100; i++) {
//     console.log(i); // This will print numbers 1 to 5
//   }
  
// for (let i = 5; i < 50; i++) {
//     // const element = array[i];
//     console.log(i);
    
// }

function one() {
    const username =  "Musa"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

// one ();


if (true) {
    const username = "Musa"
    if (username === "Musa") {
        const website = " youtube"
        // console.log(username + website);
    }
}


// +++++++++++++++++++++++++++  interesting +++++++++++++++++++++++++++



// addone(5);  // this is working
console.log(addone(5));
function addone(num) {
    return num + 1;
}


// addtwo(5) // this is not working
const addtwo = function (num) {
    return num + 2;
}

