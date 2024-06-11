

console.log("first")
console.log("second")
try{
    console.log(a)
}catch(e){
    console.error(e);
    console.log(e.message) //a is not defined
    console.log(e) //ReferenceError: a is not defined at errorhandling.js:4:17
}
console.log('Third')
console.log('last')
