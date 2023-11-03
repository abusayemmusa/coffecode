const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    sw : "swift"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${myObject[key]} sortcut is ${key}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);
}