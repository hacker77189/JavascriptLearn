// const tinderUser = new Objects()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Samamy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Minhaj",
            lastname: "Alam"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// onst obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"

}

const {courseInstructor: instructor} = course

console.log(instructor);



