/*Write a function that removes all duplicates from an array and returns the modified array. Example: [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5] */
/*let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
return arr.filter((item,index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
*/

/*Q2.Use map() and filter() together to create a new array of names (strings) longer than 5 characters and convert them to uppercase.
Example: ["Alice", "Bob", "Charlotte"] → ["CHARLOTTE"]


function filterAndUppercaseNames(names) {
    return names
        .filter(name => name.length > 5)
        .map(name => name.toUpperCase());
}

// Example usage
const names = ["Alice", "Bob", "Charlotte"];
const result = filterAndUppercaseNames(names);
console.log(result);  // Output: ["CHARLOTTE"]

*/
/**Create a function that takes an array of numbers and returns an array of the square of even numbers only. 

function squareEvenNumbers(array) {
    return array
        .filter(number => number % 2 === 0)  // Filter out only even numbers
        .map(number => number * number);      // Square each of the even numbers
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];
const result = squareEvenNumbers(numbers);
console.log(result);  // Output: [4, 16, 36]
*/

/**what is coluser in javascript give one exaple 
 * 
 * 
 * A closure is a feature in JavaScript where a function
 *  retains access to variables from its outer function scope,
 *  even after the outer function has completed executing.
 * 
 * example
 * 
 * function outerFunction(message) {
  function innerFunction() {
    console.log(message);
  }
  return innerFunction;
}

// Create a closure
const closure = outerFunction("Hello, world!");

// Call the closure
closure(); // Outputs: "Hello, world!"

*/
/*
function outerFunc(message){
    function innerFunc(){
        console.log(message)
    }
    return innerFunc
}

const colsure =outerFunc("hello world");
colsure();
*/
//give arrayreturn even of squreNumber in array
/*
function sqr(array){
    return array .filter(num =>num%2 ===0)
    .map(num=>num*num)
    
}
const numbers=[1,2,3,4,5,6,8,34];
const col =sqr(numbers)
console.log(`The Even Number of Srq ${col}`)
*/

/*colsure

function func(msg){
    function func1(){
        console.log(msg)
    }
    return func1;
}
const colsure =func("hello world");
colsure();
*/
/*****************************Peractic seassion*********************************** */
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

/*let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((i)=> {
  return [i, i * i];
});

console.log(newArr);
*/
/*let fruits = ["apple", "banana", "carry"];
let fruitsObjects = [];

for (let i = 0; i < fruits.length; i++) {
  fruitsObjects.push({ name: fruits[i] });
}

console.log(fruitsObjects);
*/
/*
using map mathods only
let array = [[1, 2], [3, 4], [4, 5]];
let prodArray = array.map((innerArray)=> {
  return innerArray[0] * innerArray[1];
});
console.log(prodArray); // Outputs: [2, 12, 20]
*/

//using map ang reduce
/*let array = [[1, 2], [3, 4], [4, 5]];
let prodArray = array.map((innerArray)=>{
  return innerArray.reduce((acc, currValue)=> {
    return acc * currValue;
  });
});
console.log(prodArray); 
*/

/** Q1:  creae a const object called "product" to store information shown in the picture 

const product ={
  title:"Bal Pen",
  rating:4,
  offers:5,
  price:270,
}

console.log(product)
*/
/*const isArmstrong = (num) => {
  const digits = num.toString().split('').map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

console.log(isArmstrong(153)); // Output: true
console.log(isArmstrong(123)); // Output: false


const isArmstrong =(num)=>{
  const digits =num.toString().split('') .map(Number);
  const power=digits.length;
  let sum=0;
  
  for (const digit of digits) {
    sum += Math.pow(digit, power);
  }
  return sum === num;
};
console.log(isArmstrong(153));
*/
/**Reverse a String:
 * 
 
const reverseString = (str) => {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
};

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
*/

/**Q3 Check for Palindrome: 

const isPalindrome = (num) => {
  const len = num.length;
  for (let i = 0; i < len / 2; i++) {
    if (num[i] !== num[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(123)); // Output: true
console.log(isPalindrome(252)); // Output: false
*/

/**Factorial numbar 

const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
*/

//https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1