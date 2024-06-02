
//Import the above array of objects into another module , and then
import {employees} from './employees.js'

//1. Find the names(array of names) of employees of Hyderabad
let a=[];
for(let e of employees){
    if(e.address.city === 'hyderabad'){
        a.push(e.name)
    }
}
console.log("Employees of hyderabad are: ",a);

//2. Find the name and address of employees whose age between 40 and 50
let b=employees.filter((e)=>e.age>=40&&e.age<=50)
console.log("Employees whose age between 40 and 50 ")
for(let e of b){
    console.log("Name: ",e.name,",Address: ",e.address)
}

//3. Find the employees who are not from Hyderabad
let c=[];
for(let e of employees){
    if(e.address.city !== 'hyderabad'){
        c.push(e.name)
    }
}
console.log("Employees who are not from hyderabad are: ",c);

//4. Find the names (array of names) of employees whose skill is "reactjs"
let d=[];
for(let e of employees){
    if(e.skills.includes('reactjs')){
        d.push(e.name)
    }
}
console.log("Employees whose skill is reactjs are: ",d);