//For

// for (let i = 0; i <= 100; i++) {
//     const element = i
//     console.log(i);
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is better than");
    }
    // console.log(element);
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner loop ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//     }
// }

// let myArray = ["batman", "superman", "flash"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     let element = myArray[index];
//     console.log(element);
// }

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        // continue
    }
    console.log(`value of i is ${index}`);
}