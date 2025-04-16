// recursion is a function that calls itself
// recursion is a way to solve problems by dividing the problem into smaller problems

//i to n using recursion
 /*function print(i, n) {
     if (i > n) {
         return;
     }
     console.log(i);
     print(i + 1, n);
 }
    console.log(print(1, 5));
    */
//factorial using recursion
//5! = 5 * 4 * 3 * 2 * 1 = 120
//4! = 4 * 3 * 2 * 1 = 24
//3! = 3 * 2 * 1 = 6
//2! = 2 * 1 = 2
//1! = 1
//0! = 1    

/*function f(i,n){
    if(i>n){
        return;
    }
    f(i+1,n);
    console.log(i)
}
f(1,5);
*/
/*
function f(i,n){
    if(i>n){
        return;
    }
    console.log(i);
    f(i+1,n);
    console.log(i);
}

f(1,3)
*/

/*function  f(i,j){
    if(i>j){
        return;
    }
    console.log(i);
    f(Math.floor(9%2),j);
    
}
console.log(f(9,2));
*/

/*function f(i=1,n=4){
    if(i>n){
        return;
    }
    f(i*3,n)
    console.log(i);
    f(i+2,n);
    
}
f(1,4);
*/
/*
function f(i=5,n=1){
    if(i<n){
        return;
    }
    f(i-2,n)
    console.log(i);
   
}
console.log(f(5,1));
*/

//factorial using recursion
/*function factorial(n){
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));  
console.log(factorial(2));
console.log(factorial(1));
*/

//power using recursion
/*function power(x,n){
    if(n===0){
        return 1;
    }
    return x*power(x,n-1);
}
console.log(power(2,3));
*/
//fibonacci series using recursion
//0 1 1 2 3 5 8 13 21 34 55 89 144
/*function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(9));
*/

function fibonacci(n){
    if(n==1){
        return 1;
    }
    if(n==0){
        return 0;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(8));