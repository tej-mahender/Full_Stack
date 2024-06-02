//scope,closure,hoisting,array,objects,complex-objects
//advanced-operations(array,object),class-object,prototype

// global scope
let a=10;
function s(){
    let b=30;
    if(b===30){
        let c=40;
        return a+b+c;
    } 
}
//console.log(c) //cant access c here
   // console.log(b) //cant access b here
console.log(s())

//closure. it creates a copy after the end of function for future purposes
function getvalue(v){
    let d=v;
    return function suma(){
        let sum=a+d;
        return sum;
    }
}
let r=getvalue(20);
let sumb=r();
console.log(sumb);

//hoisting
//variables declared with var will be hoisted but not with let,const

//array
let n=['apple', 'banana','cherry'];
console.log(n[0]);//apple
console.log(n[1]);//banana
console.log(n[5]);//undefined

//traversing
for(let j=0;j<n.length;j++){
    console.log(n[j])
}
for(i in n){
    console.log(n[i]);
}
//for-of
for(let index of n){
    console.log(index);
}

//add new element to array
n.unshift('grapes')//at start
console.log(n);
n.push('oranges')//at end
console.log(n);
n.splice(2,0,'kiwi');//insert at position 2,no elements removed
console.log(n);

//deleting 
n.shift()//delete from start , can remove only 1 element
console.log(n);
n.pop()//delete from end, can remove only 1 element
console.log(n)
n.splice(1,1)//deletes at position  1 ,removes 1 element
console.log(n)

//modification
n.splice(1,1,'mango') //replaces one element at pos 1 with mango
console.log(n)

//objects
let p={
    name:'John',age:30
};
//accessing proerties
console.log(p.name);
console.log(p.age);
console.log(p['name']);
//iterate for-in
for (x in p){
    console.log(x+":"+p[x]);
}
//insert
p.country='USA';
console.log(p);
//delete
delete p.age;
console.log(p);
//update
p.name='Dev'
console.log(p);

//complex object
let student={
    rollno:24,
    name:'Abhi',
    age:25,
    marks:[98,76,85],
    address:{
        plot:244,
        street:'rank road'
    },
    getAverage:function(){
        let total=0;
        for(let m of this.marks){
            total+=m;
        }
        return total/this.marks.length;
    }
}
console.log(student)
console.log(student.getAverage());
console.log(student.address.street);

//advanced operations on array
let arr=[9,-23,78,65,87,12];

//filter
//let res=arr.filter(function(e){
 //   return e>50;
//})
let res=arr.filter((e)=>e>50);
console.log(res);

//modification
let res2 = arr.map(e => {
    if (e % 2 == 0) {
        return e + 10;
    } else {
        return e + 20;
    }
});
console.log(res2);

//foreach(iterate)
arr.forEach((e,i)=>{
    console.log("element: ",e,"index: ",i)
});

//search-find()
let res3=arr.find((e)=>e===78)
console.log(res3);//returns element if found else returns undefined
let res4=arr.findIndex((e)=>e===78)
console.log(res4);//returns index if found else returns -1

//reduce
let  res5=arr.reduce((a,b)=>a+b)
console.log(res5);//sum of all elements in the array
let res6=arr.reduce((a,b)=>a>b?a:b)
console.log(res6);//max of array

let emp=[
    {
        eno:100,name:'ravi',age:21,salary:2000
    },
    {
        eno:200,name:'bhanu',age:25,salary:5000
    },
    {
        eno:300,name:'vikas',age:30,salary:30000
    }
]
//finding youngest emp
let young=emp.reduce((a,b)=>a.age<b.age?a:b)
console.log(young.name)
//incrementing salary by 5000
let inc=emp.map(e=>e.salary+5000)
console.log(inc)
//emp btw age 15-25
let res7=emp.filter((e)=>e.age>15&&e.age<25)
console.log(res7)

//advanced- operations on object
let obj={
    a:10,b:20,c:30
}
//get all keys
let k=Object.keys(obj)
console.log(k)
//getValueByKey
let v=Object.values(obj)
console.log(v)
//adding new pair
obj.d=40;
console.log(obj)
//freezing 
Object.freeze(obj)
obj.e=50;
console.log(obj)//new pair is not added

//creating a copy of obj
let copy=Object.assign({},obj)
console.log(copy)
let obj1={x:34}
let obj2={y:68}
let obj3=Object.assign({},obj1,obj2)
console.log(obj3)


//multiple objects of same type
class Student{
    constructor(rollNo,name){
        this.rollNo=rollNo
        this.name=name
    }
    getDetails(){
        console.log(this.rollNo+" "+this.name)
    }
}
let std1=new Student(1, "John")
std1.getDetails()
let std2=new Student(2,"Jane")
std2.getDetails()
console.log(std1)
console.log(std2)

//prototype-similar to inheritance
let clgDetails={
    college:'PVPSIT',
    branch:'CSE',
    city:'Bangalore'
}
let p1={
    name:"Rahul",
    rollno:17
}
let p2={
    name:'Akash',
    rollno:19
}
Object.setPrototypeOf(p1,clgDetails)
Object.setPrototypeOf(p2,clgDetails)
console.log(p1)
console.log(p2.city)
//modern type inheritance
class clg{
    constructor(cn,city){
        this.cn=cn;
        this.city=city
    }
}
class child extends clg{
    constructor(cn,city,sno,name){
        super(cn,city);
        this.sno=sno;
        this.name=name;
    }
}
let std3=new child("PVPSIT","Bangalore",56,'Saurabh')
console.log(std3)