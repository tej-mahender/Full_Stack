//mutable and immutable

//primitives are immutable
let x=12;
console.log(x) //12
x+50
console.log(x);  //still 12 because it is immutable
x+=-5;          //it creates a new memory without modifying original
console.log(x); //7
x='ravi'
console.log(x); //ravi
x+='kumar'
console.log(x); //ravikumar

//non-prmitives(objects,arrays)are mutable
let p= {name:'Ravi',age:36};
console.log(p.name) //Ravi
p.name='Raj' //Ravi is replaced by Raj
console.log(p.name) //Raj

