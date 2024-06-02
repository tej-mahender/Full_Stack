//1. Create Employee class and add properties name, age, basic and add getSalary method to its prototype. Create 5 Employee objects and print their salaries.
class Employee{
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
   }
   getSalary = function() {
     return this.salary;
   }
}

let e1 = new Employee('John', 25, 7000);
let e2 = new Employee('Jane', 30, 8000);
let e3 = new Employee('Tom', 40, 9000);
let e4 = new Employee('David', 23, 6000);
let e5 = new Employee('Akash', 35, 10000);

console.log("Name:", e1.name+", Salary:", e1.getSalary());
console.log("Name:", e2.name+", Salary:", e2.getSalary());
console.log("Name:", e3.name+", Salary:", e3.getSalary());
console.log("Name:", e4.name+", Salary:", e4.getSalary());
console.log("Name:", e5.name+", Salary:", e5.getSalary());

//2. Create Product class and add properties brand, price, model and add getDiscountPrice method to its prototype. Create 5 Products objects and print their discount price.
class Product {
    constructor(name, productNumber, price, brand) {
        this.name = name;
        this.productNumber = productNumber;
        this.price = price;
        this.brand = brand;
    }
    getDiscountPrice(percentage) {
        return this.price - (percentage / 100 * this.price);
    }
}

let p1 = new Product("Laptop", 007, 10000, "Dell");
let p2 = new Product("Smartphone", 008, 10000, "Samsung");
let p3 = new Product("Headphones", 009, 10000, "Sony");
let p4 = new Product("Tablet", 010, 10000, "Apple");
let p5 = new Product("Printer", 011, 10000, "HP");

console.log("Discounted price for Product1:", p1.getDiscountPrice(20));
console.log("Discounted price for Product2:", p2.getDiscountPrice(15));
console.log("Discounted price for Product3:", p3.getDiscountPrice(10));
console.log("Discounted price for Product4:", p4.getDiscountPrice(25));
console.log("Discounted price for Product5:", p5.getDiscountPrice(30));
