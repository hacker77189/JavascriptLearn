// singleton
// object.create
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Minhaj",
    "full name": "Minhaj Alam",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "minhaj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "minhaj54@gmail.com"
// Object.freeze(JsUser)  // no change possible

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





