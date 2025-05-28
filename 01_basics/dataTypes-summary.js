// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345344343434353335n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name: "Minhaj",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "minhajalam"
let another = myName
another = "jav"

console.log(myName);
console.log(another);

let userOne = {
    name:"user1",
    pass:121,
}

let userTwo = userOne

userTwo.pass = 321

console.log(userOne.pass);
console.log(userTwo.pass);



