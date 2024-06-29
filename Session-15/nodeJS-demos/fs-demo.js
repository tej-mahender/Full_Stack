//import fs module
const fs = require('fs');
// //use fs module
//     //read file content
//     fs.readFile('./sample.txt', (err, data) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(data.toString());
//             }
//         });

// console.log("outside")

//write new content to a file
//write function replaces the exisiting data with new data
//append adds the data to existing data

fs.appendFile('./sample.txt','another new information',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('success');
    }
})