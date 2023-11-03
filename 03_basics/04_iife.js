//Immediate Invoket Functions Expressions (IIFE)


// function chai () { 
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai () { 
    // name IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Musa");
