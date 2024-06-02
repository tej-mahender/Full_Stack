
//1. Write a program to implement Arithmetic operations
let a=15;
let b=6;
console.log("Addition: ",a+b);
console.log("Subtraction: ",a-b)
console.log("Multiplication: ",a*b);
console.log("Division: ",a/b);
console.log("Modulus: ",a%b)

//2. Write a program to test unary increment & decrement operators
let c=6;
console.log("Before Increment c = ",c);
console.log("Post increment:", c++); // Output: 6, c is incremented after printing now c=7
console.log("Pre increment:", ++c);   // Output: 8, c is incremented before printing now c=8
console.log("Post decrement:", c--); // Output: 8, c is decremented after printing now c=7
console.log("Pre decrement:", --c);   // Output: 6, c is incremented before printing now c=6

//3. Write a program to verify comparison operators
let x=13;
let y=9;
console.log("x=",x,"y=",y);
console.log("Equal to: ",x==y)
console.log("x greater than y: ",x>y)
console.log("x lesser than y: ",x<y)

//4. Write a program to find difference between == and === operators
let p=12;
let q='12';
console.log(p==q)//returns true as their value is equal irrespective of datatype
console.log(p===q)//return false as their datatype is different

//1. Write a program to find big number of given two numbers
let n=23,m=45;
console.log("n =",n,"m =",m);
if(n > m){
    console.log("Big Number:",n);
} else if(n==m){
    console.log("Both are equal")
}else{
    console.log("Big Number:",m);
}

//2. Write a program to find big one in given three numbers
let i=18,j=56,k=30;
console.log("i =",i,"j =",j,"k =",k);
if((i>j && i>k)){
    console.log("The Big One is:",i);
}else if((j>i && j>k)){
    console.log("The Big One is:",j);
}else{
    console.log("The Big One is:",k);
}

//3. Write a function to find the factors of a given number
let d=24;
console.log("Factors of",d,":",);
getFactors(d)
function getFactors(d){
    for(let i=1;i<=d;i++){
        if(d%i==0){
            console.log(i);
        }
    }
}

//4. Write a function to check given number is prime or not
let n1=9,n2=11;
let r1=isPrime(n1),r2=isPrime(11);
if(r1){
    console.log(n1+" is Prime");
}else{
    console.log(n1+" is Not Prime");
}
if(r2){
    console.log(n2+" is Prime");
}else{
    console.log(n2+" is Not Prime");
}
console.log()
function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n % i ==  0){ 
            return false;
        }
    }
    return true;
}

//5. Write a function to print even factors of given number
let f=24;
console.log("Even Factors of "+f+":",);
getFactors(d)
function getFactors(d){
    for(let i=1;i<=d;i++){
        if(d%i==0  && i % 2 === 0){
            console.log(i);
        }
    }
}

//6. Write a function to receive a number as arg and return sum of its digits
let num = 3789;
console.log("Sum of Digits in "+num+ " : ",sumOfDigits(num));
function sumOfDigits(num){
    let sum=0;
    while (num>0) {
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}