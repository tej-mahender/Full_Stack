//1. Create student, bus , employee and mobile objects with all possible properties 
let Student={
    name:"John",
    age:20,
    rollno:1,
    branch:"CSE",
    college:"PVPSIT",
    scores:[
        {subject:"Maths",marks:85},
        {subject:"English",marks:90},
        {subject:"Physics",marks:75}
    ]
}
console.log(Student)

let Bus={
    color: "Blue",
    capacity : 40,
    route : "Delhi-Mumbai",
    driver:{name:"Ram",age:60}
}
console.log(Bus)

let Employee={
    id:34,
    name:"Saurav",
    age:45,
    designation:"Manager",
    department:"HR",
    salary:10000,
    experience:5
}
for(x in Employee){
    console.log(x+":"+Employee[x])
}

let  Mobile ={
    model :"iPhoneX",
    os : "IOS",
    storage : 256,
    ram : 4,
    battery : "3000mAh",
    features: ["Face ID", "4K video recording", "Wireless charging"]
}
for(i in Mobile){
    console.log(i+":"+Mobile[i])
}

//2. Create Student object with properties roll number, name, marks(array),address and method to compute aggregate of marks
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

//3. Create product object with properties product number, product name, model, price and a method to return discount price by receiving the discount percentage as argument.
let product={
    name:"Laptop",
    productnumber:007,
    price:10000,
    brand:"Dell",
    discount:function(percentage){
        this.price=this.price-((percentage/100)*this.price);
        return this.price;
    }
}
console.log(product)
console.log("Discounted price: "+product.discount(20))