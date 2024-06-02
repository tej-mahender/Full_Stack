
//creating copies
let org=12;
let c=org;
console.log('Original: ',org)
console.log('Copy: ',c); 
org=500;
console.log('Original: ',org)
console.log('Copy: ',c); 

//creating copy of object 
//using assign
let  obj ={a:1,b:2} ;
let copyObj=Object.assign({},obj);   //create a shallow copy of object
console.log("original Object",obj);
console.log("Copied Object",copyObj);
obj.a=99;                      //change the value in copied object
console.log("original Object",obj);
console.log("Copied Object",copyObj);

//using spread
let  obj1 ={a:10,b:20} ;
let copyObj1={...obj1};   //create a shallow copy of object
console.log("original Object",obj1);
console.log("Copied Object",copyObj1);
obj1.a=45;                      //change the value in copied object
console.log("original Object",obj1);
console.log("Copied Object",copyObj1);