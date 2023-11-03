// arrays 

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["Sayem", "Musa"]

// console.log(myArr);

const myArray2 = new Array(2, 4, 6, 8);

// console.log(myArray2);
// console.log(myHeors);
// console.log(myArray2.length);
// console.log(myArray2[0]);

//Array methods  

myArr.push(6)
// console.log(myArr);

myArr.push(8);  // Array methods
// myArr.pop();  // remove the last element
// myArr.unshift(9); //Add the first element
myArr.shift(); //remove the first element

// console.log(myArr.includes(9)); // Check if the array contains
// console.log(myArr.indexOf(9));  //find nomber of array
// console.log(myArr.indexOf(3));  // find arr position

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// slice slice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);



