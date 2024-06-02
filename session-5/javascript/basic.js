//this file contains declaring variables,data-types.objects,operators
//conditional,functions,scope

//declaring variables
let a=10
var b
const c='t ej ';
console.log(typeof a);
console.log("value of a is: ",a)
console.log(typeof b)
console.log(typeof c)

//objects
 array=[1,2,3]
 names=['john','martin']
 console.log(typeof array)
console.log(typeof names)
let obj={
    name:'ravi',age:21,
}
console.log(obj)
console.log(typeof obj)

//operators
a=12;
b='12';
console.log('addition operator : ',a+12)
console.log('addition operator : ',b+12)
console.log(a==b)//returns true as both are 12
console.log(a===b)//strict comparison returns false as datatype is different

//if-else-if
a=10;b=7;
if(a>b){
    console.log("a is max")
}else if(a===b){
    console.log("both are equal");
}else{
    console.log( "b is max" )
}

//functions
function add(x,y){
    return x + y;
}
let sum = function(a,b){
    return a+b;
}
//arrow function
let diff=(a,b) => a - b;

console.log(sum(5,6));
console.log(add(5,6))
console.log(diff(5,6))

//scope
//global scope
let t=1;
function fun(){
    let a=t+3; //local scope
    return a;
}
console.log(fun())
console.log(t);