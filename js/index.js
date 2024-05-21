
function getuser() {
        console.log(user)
}
getuser()
const user = "name";

let x = 25
x.toString()

let b = 6.45
b.toFixed()

let c = 756
c.valueOf()

var numObject = new Number(42); // Creating a Number object
console.log(numObject.valueOf()); // Output: 42
var sum = numObject + 10; // JavaScript implicitly calls numObject.valueOf() here
console.log(sum); // Output: 52







//  array every

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);
function myFunction(value, index, array) {
    return value > 18;
}
console.log(allOver18)

// array filter

const numbers1 = [45, 4, 9, 16, 25];
let allOver16 = numbers.filter(myFunction);
function myFunction(value, index, array) {
    return value > 18;
}
console.log(allOver16)

// array reduce

const numbers2 = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
function myFunction(total, value, index, array) {
    return total + value;
}
console.log(numbers2)
console.log(sum)

// array find

var numbers3 = [2, 4, 9, 16, 25];
var allOver19 = numbers3.find(myFunction);
function myFunction(value, index, array) {
    return value > 10;
}
console.log(allOver19)

// array findIndex

var numbers4 = [2, 4, 9, 16, 25];
var allOver17 = numbers4.findIndex(myFunction);
function myFunction(value, index, array) {
    return value > 10;
}
console.log(allOver17)

// array from

const myArr=Array.from("Lamrin")
console.log(myArr)

// array keys

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + " ";
}
console.log(text)

//array entries

const fruits2= ["Banana", "Orange", "Apple", "Mango"];
const keys2 = fruits.entries();

let text1 = "";
for (let x of keys) {
  text += x + " ";
}
console.log(text)

//array includes

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.includes("Mango");

//array spread operator

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)