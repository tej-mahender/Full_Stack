//import and use express module
const exp = require('express');
const app=exp();


require('dotenv').config()


//import mongo client
const {MongoClient}=require('mongodb');
let mC=new MongoClient(process.env.DB_URL);

mC.connect()
.then((connectionObj)=>{
    console.log("Connected to db")

    //connect to a database
    const backend = connectionObj.db('pvpdb')
    //connect to a collection
    const users = backend.collection('users')
    const products = backend.collection('products')
    const cart = backend.collection('cart')
    
    //share collection obj to APIs
    app.set('users',users)
    app.set('products',products)
    app.set('cart',cart)

    //assign port number to http server of express app
    app.listen(process.env.PORT,()=>console.log("http server started on port 4000"))
})
.catch(err=>console.log(err))

//import userApp express object
const userApp = require('./APIs/userApi');
const productApp = require('./APIs/productApi');

//if path starts with user-api forward to userApp
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//handling invalid paths
app.use('*',(req,res,next)=>{
    res.send({message:`invalid path ${req.url}`})
})

//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"error occured",errorMessage:err.message})
})