// singleton 


//object.create

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Musa",
    "fullName" : "Md Abu Sayem Musa",
    mySym : "myKey2",  //this is not right
    // [mySym] : "myKey2",
    age : 18,
    location : "bangladesh",
    email : "musa@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["sunday", "tuesday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser);
// console.log(JsUser["fullName"]);
// console.log(JsUser.mySym); //this is not right
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "musachatgpt@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "musamicrosoft@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}


// console.log(JsUser.greeting); //for check unfreeze Object
console.log(JsUser.greeting()); //for check unfreeze Object
console.log(JsUser.greetingTwo()); //for check unfreeze Object
