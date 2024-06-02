//1. Find sum of elements of an array 
//2. Consider the following array
 //     [ 1 ,2 , 3, 4 ]
 //     Create new array by adding 10 to first element, 20 to second element , 30 to third element and so on using map() method.
//     [1,2,3,4 ]======>[ 11,22,33,44]
let array=[1,2,3,4]
console.log("Array:",array)
let sum = array.reduce((a,b)=>a+b)
console.log("Sum of elements:",sum)
let res=array.map((e,i)=>e+(i+1)*10)
console.log("Modified array:",res)


//3. Consider the following array of students marks
//[
//    { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},
//    { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},
//    { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},
//]
//Find the names of students who got highest marks in maths , physics and chemistry.
let studentMarks=[
     { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},
     { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},
    { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},
]
console.log("StudentMrks:",studentMarks)
let maxMaths=studentMarks.reduce((a,b)=>a.marks.maths>b.marks.maths?a:b)
console.log("Student with highest marks in maths:",maxMaths.name)
let maxPhy=studentMarks.reduce((a,b)=>a.marks.physics>b.marks.physics?a:b)
console.log("Student with highest marks in physics:",maxPhy.name)
let maxChem=studentMarks.reduce((a,b)=>a.marks.chemistry>b.marks.chemistry?a:b)
console.log("Student with highest marks in chemistry:",maxChem.name)