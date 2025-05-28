const name = "minhaj"
const repoCount =  20

//console.log(name + repoCount + " value");
 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('minhajalam-hc-hallo')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-12,5)
console.log(anotherString);

const newStringOne = "    minhaj   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://minhaj.com/minhaj%20alam"


console.log(url.replace('%20' , '-'));

console.log(url.includes('https'));

console.log(gameName.split('-'));







