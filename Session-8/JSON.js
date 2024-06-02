//JS obj
let person={
    id:100,
    name:"John",
    age:30
}   
console.log(person)

//JSON obj
// let person1={
//     "id":100,
//     "name":"John",
//     "age":30
// }

//transform JS object to JSON
let jsonObj=JSON.stringify(person)
console.log(jsonObj)

//JSON object back to JS
let jsObj=JSON.parse(jsonObj)
console.log(jsObj)
