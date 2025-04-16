/*let mode ="dark";
let color;

if(mode==="dark"){
    color="black";

}
if(mode==="light"){
    color="white";
}
console.log(color)
*/

/*let age =24;

if(age>=19){
    console.log("vote")
}else{
    console.log("not vote")
}
    */

/*let arr=[1,2,3,4,5];
let even=0;
let odd=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log("Number is even",arr[i])
        even++;
    }
    else{
        console.log("Number is odd",arr[i])
        odd++
    }
}
console.log("Number of even",even );
console.log("Number of odd",odd)
*/
/*let num=5;
if(num%2==0){
    console.log("Number is even ")
}else{
    console.log("Number is odd")
}
console.log(num)
*/
/*
let arr =[1,2,3,4,5,6]
let odd=0;
count=0;
sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count++
    } else if(arr[i] !=0)
    {
        odd++;
    }
}
console.log("total sum of enve number ",count);
console.log("total sum of odd number ",odd)
*/
/*let number = 9474;
let tempNumber = number;
let numDigits = 0;
let sum = 0;
let power, digit;

// Calculate the number of digits
while (tempNumber > 0) {
    numDigits++;
    tempNumber = (tempNumber - (tempNumber % 10)) / 10; // Manually removing the last digit
}

// Reset tempNumber to the original number
tempNumber = number;

// Calculate the sum of the digits raised to the power of numDigits
while (tempNumber > 0) {
    digit = tempNumber % 10;
    power = 1;

    // Manually calculate the power
    for (let i = 0; i < numDigits; i++) {
        power *= digit;
    }

    sum += power;
    tempNumber = (tempNumber - (tempNumber % 10)) / 10; // Manually removing the last digit
}

if (sum === number) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}
*/
/*
let number = 9474;
let tempNumber = number;
let numDigits = 0;
let sum = 0;
let digit;

// Calculate the number of digits
while (tempNumber > 0) {
    numDigits++;
    tempNumber = (tempNumber - (tempNumber % 10)) / 10; // Manually removing the last digit
}

// Reset tempNumber to the original number
tempNumber = number;

// Calculate the sum of the digits
while (tempNumber > 0) {
    digit = tempNumber % 10;
    sum += digit;
    tempNumber = (tempNumber - (tempNumber % 10)) / 10; // Manually removing the last digit
}

console.log("Number of digits: " + numDigits);
console.log("Sum of digits: " + sum);
*/

/*function getNumberOfDigits(number){
    let count=0;
    while(number>0){
        count++
        number=Math.floor(number/10);
    }
    return count;
}
//console.log(getNumberOfDigits(123))
function getSumOfDigits(number){
    let sum=0;
    while(number>0){
        sum +=number%10;
        number=Math.floor(number/10);
    }
    return sum;
}
 let number=12345;
 console.log(getNumberOfDigits(number))
 console.log(getSumOfDigits(number))
 */
//Check if a number is a palindrome.
/*let number = 132;
let originalNumber = number;
let reversedNumber = 0;

while (number > 0) {
    let digit = number % 10;
    reversedNumber = (reversedNumber * 10) + digit;
    number = (number - digit) / 10;
}

if (originalNumber === reversedNumber) {
    console.log(originalNumber + " is a palindrome.");
} else {
    console.log(originalNumber + " is not a palindrome.");
}
*/

//Remove duplicates from an array.
/*
let arr=[1,2,2,3,4,4,5,6,6,7];

let unique=[];
for(let i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i]);
    }
}
console.log("Array without Duplicates:" + unique);

*/