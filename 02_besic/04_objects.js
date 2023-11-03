// const tinderUser = new Object ();
const tinderUser = {};

tinderUser.id = "123abc",
tinderUser.name = "Musa",
// tinderUser.email = "musa@gmail.com",
tinderUser.isLoggedIn = true;


// console.log(tinderUser);


const regularUser = {
    email : "musa@gmail.com",
    fullName : {
        fullUserName : {
            firstName : "Abu Sayem",
            lastName : "Musa",
        }
    }
}


// console.log(regularUser.fullName.fullUserName.firstName);
// console.log(regularUser.fullName.fullUserName.lastName);
// console.log(regularUser.fullName.fullUserName);
// console.log(regularUser.fullName);
// console.log(regularUser);



const obj1 = {1: "a", 2: "b"}


const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}

// console.log(obj3);



const users = [
    {
        id: "1",
        email: "a@email.com"
    },

    {
        id: "2",
        email: "b@email.com"
    },

    {
        id: "3",
        email: "c@email.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));
// console.log(tinderUser.hasOwnProperty('Musa'));



const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Sroddha",
} 

// course.courseInstructor

const {courseInstructor} = course //this for courseInstructor
const {courseInstructor : Instructor} = course  // this for Instructor

// console.log(Instructor);
// console.log(courseInstructor);


// {
//     "name" : "Musa",
//     "courseName" : "js in Hindi",
//     "price" : "free",
// }

[
    {},
    {},
    {}
]


