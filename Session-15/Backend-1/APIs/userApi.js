const exp = require('express');
const userApp = exp.Router();
const {db}=require('mongodb')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tokenVerify = require('../middlewares/tokenVerify')
const expressAsyncHandler=require('express-async-handler')
//app body parser middleware
userApp.use(exp.json())

require('dotenv').config();
//create sample rest api(req handlers-routes)

//route for get users (public route)
userApp.get('/users',tokenVerify,expressAsyncHandler(async (req,res)=>{
    //get user collection obj
    const userCollection=req.app.get('users');
    //get users data from collection of DB
    let usersdata=await userCollection.find().toArray();
    //send users data to client
    res.send({message:"users", payload:usersdata})
}))

//route to get specific user by username (protected route)
userApp.get('/users/:username',tokenVerify,expressAsyncHandler(async(req,res)=>{
   //get userCollection obj
   const userCollection=req.app.get('users');
   //get id from url
   const usernameURL=req.params.username;
   //find user by username
   let user=await userCollection.findOne({username:{$eq:{usernameURL}}});
   //send res
   res.send({message:"user",payload:user})
}))


//route to post or create user (public route)
userApp.post('/user',expressAsyncHandler(async (req,res)=>{
    const userCollection=req.app.get('users');
    //get user data from req body
    const user=req.body;

    //verify duplicate user
    let existUser = await userCollection.findOne({username:user.username})
    if(existUser!==null){
        res.send({message:"user already exist",payload:existUser})
    }else{
        //hash the password
        let hashPass=await bcryptjs.hash(user.password,7)
        //replace pass with Hashpass
        user.password=hashPass;
        user.products=[];
        //save user
        await userCollection.insertOne(user)
        //send res
        res.send({message:"user created",payload:existUser})
    }

}))

//user login or authentication (public route)
userApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const userCollection=req.app.get('users');
    //get user data from req body
    const user=req.body;
    //verify user
    let dbUser=await userCollection.findOne({username:user.username})
    if(dbUser===null){
        res.send({message:"invalid username"})
    } 
    else{
        //compare password
        let result=await bcryptjs.compare(user.password,dbUser.password)
        //if passwords not matched
        if(result===false){
            res.send({message:"invalid password"})
            }
            //if passwords matched
            else{
                //create JWT token
            let signedToken=jwt.sign({username:user.username},process.env.SECRET_KEY,{expiresIn:'1h'})
            //send res
            res.send({message:"login success",token:signedToken,user:user})
            }
    }
}))

//route to update user (protected route)
userApp.put('/user',tokenVerify,expressAsyncHandler(async (req,res)=>{
    const userCollection=req.app.get('users');
    //get modified user data from req body
    let modified=req.body
    //modify by username
    let modifiedUser=await userCollection.updateOne({username:modified.username},{$set:{...modified}})
    //send res
    res.send({message:"user updated",payload:modifiedUser})

}))

//route to delete user (protected route)
userApp.delete('/user/:username',tokenVerify,expressAsyncHandler(async (req,res)=>{
   const userCollection=req.app.get('users');
   //get username from req params
   let usernameURL=req.params.username
   //delete by username
   let deletedUser=await userCollection.deleteOne({username:usernameURL})
   //send res
   res.send({message:"user deleted",payload:deletedUser})
}))


userApp.delete('/user/:username/:productid', tokenVerify, expressAsyncHandler(async (req, res) => {
    const userCollection = req.app.get('users');
    // Get username and productid from req params
    let usernameURL = req.params.username;
    let productID = req.params.productid;
    
    // Find the user and update their products array to remove the specified product
    let updatedUser = await userCollection.updateOne(
        { username: usernameURL },
        { $pull: { products: productID } } // Assuming products is an array of product IDs
    );
    
    // Check if any document was modified
    if (updatedUser.modifiedCount > 0) {
        res.send({ message: "Product deleted from user", payload: updatedUser });
    } else {
        res.status(404).send({ message: "Product not found or user not found" });
    }
}));

userApp.put('/add-to-cart/:username',expressAsyncHandler(async(req,res)=>{
   //get user collection obj
   const userCollection=req.app.get('users');
    let usernameURL=req.params.username;
    let productObj=req.body;
   let result= await userCollection.updateOne({username:usernameURL},{$push:{products:productObj}})
   console.log(result)
   res.send({message:"product added to cart",payload:result})
}))

//get latest cart
userApp.get('/cart/:username',expressAsyncHandler(async(req,res)=>{
    const userCollection=req.app.get("users")
    let usernameURL=req.params.username;
    let cart= await userCollection.findOne({username:usernameURL})
    res.send({message:"cart",payload:cart})
}))
module.exports = userApp;