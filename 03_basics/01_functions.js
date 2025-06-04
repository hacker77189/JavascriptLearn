function sayMyName() {
    console.log("M");
    console.log("I");
    console.log("N");
    console.log("H");
    console.log("A");
    console.log("J");
      
}

// sayMyName()

// function addTwoNumbers(number1, number2){ 
//     console.log(number1 + number2);
    
// }


function addTwoNumbers(number1, number2){ 

    let result = number1 + number2
    return result
}

const result = addTwoNumbers(2, 3)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Minhaj"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
      return num1
}

console.log(calculateCartPrice(2, 200, 400));
