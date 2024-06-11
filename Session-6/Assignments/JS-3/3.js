
//1. Take a number array and find the sum of elements of it.
let array=[1,2,3,4,5,6,7,8,9]
console.log("Array:",array)
let sum = array.reduce((a,b)=>a+b)
console.log("Sum of elements:",sum)

//2. Take a number array and print even numbers of it
let arr=[1,2,3,4,5,6,7,8,9]
console.log("Array:",arr)
let res = array.filter(e=>e%2==0)
console.log("Even numbers:",res)

//3. Take a number array and print prime  numbers of it
let a=[1,2,3,4,5,6,7,8,9]
console.log("Array:",a)
let res1 = a.filter(e=>isprime(e))
function isprime(n){
    if ( n < 2 ) return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n % i ==  0){ 
            return false;
        }
    }
    return true;
}
console.log("Prime numbers:",res1)