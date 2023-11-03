const user = {
    username: "Musa",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username  = "Sayem";
// user.welcomeMessage()

// console.log(this);


// function chai () {
//     let username = "Musa";
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "Musa";
//     console.log(this.username);
// }

const chai = () => {
    let username = "Musa";
    console.log(this);
}

// chai();

// const addTwo = (num1, num2) => {
//     return (num1 + num2)
// }


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2) // implicit return
const addTwo = (num1, num2) => ({username: "Musa",}) 



console.log(addTwo(3, 4));

//explicit return

//fungtion
const myArray = [1, 2, 3, 4]

// myArray.forEach(() => { myArray: "Musa" });
// myArray.forEach(function () {});
// myArray.forEach( () => {} );
// myArray.forEach( () => () );

