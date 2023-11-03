const  codding = ["js", "ruby", "java", "cpp", "python"];

// codding.forEach(function (value) {
//     console.log(value);
// })

// codding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// codding.forEach(printMe);

// codding.forEach((item, index, arr) => {
//     console.log(item, index, arr); 
// })

codding.forEach((item) => {
    // console.log(item);
})

const myCodding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },  
    {
        languageName : "java",
        languageFileName : "java"
    }
]

// myCodding.forEach((item) => {
//     console.log(item);
// })

myCodding.forEach((item) => {
    console.log(item.languageName);
})