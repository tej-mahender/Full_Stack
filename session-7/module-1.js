 //named export 
 //while importing it should use same variables
 let a=10;
 let name='rahul'
 let marks=[95,87,65]
 let obj={x:1,y:5}

export{a,name,marks,obj}

//default export
//no need of same vaiables while importing
let x=100
let y='hello world'
export default {x,y} 

import {users} from './users.js'
console.log(users)