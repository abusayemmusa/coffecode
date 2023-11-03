// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}

const greater = "Hello world!"
for (const great of greater) {
    // console.log(`each cerecter is ${great}`);
}

//maps

const map = new Map();
map.set('Bd', "Bangladesh")
map.set('Ind', "India")
map.set('Usa', "United States of America")
map.set('fr', "France")
map.set('Ind', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }