
//packing an array
let names=["Alice","Bob","Charlie"]
//unpacking
let [a,b,c]=names;
console.log(a)
console.log(b)
console.log(c)

//packing obj
let point={x:1,y:2}
//unpacking  
let {x,y} = point;  
console.log(x);
console.log(y);
let {x:i,y:j}=point;
console.log(i);
console.log(j);