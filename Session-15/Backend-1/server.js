//import and use express module
const exp = require('express');
const app=exp();

//import mongo client
const {MongoClient}=require('mongodb');
let mC=new MongoClient('mongodb://localhost:27017');

mC.connect()
.then(()=>{
    console.log("Connected to db")
    app.listen(4000,()=>console.log("http server started on port 4000"))
})
.catch(err=>console.log(err))

//import userApp express object
const userApp = require('./APIs/userApi');
const productApp = require('./APIs/productApi');

//if path starts with user-api forward to userApp
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//assign port number to http server of express app