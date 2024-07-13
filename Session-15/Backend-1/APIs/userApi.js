const exp = require('express');
const userApp = exp.Router();
const {db}=require('mongodb')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
//app body parser middleware
userApp.use(exp.json())

//create sample rest api(req handlers-routes)
//route for get users
userApp.get('/users',async (req,res)=>{
    //get user collection obj
    const userCollection=req.app.get('users');
    //get users data from collection of DB
    let usersdata=await userCollection.find().toArray();
    //send users data to client
    res.send({message:"users", payload:usersdata})
})

//route to get specific user by id
userApp.get('/users/:username', async(req,res)=>{
   //get userCollection obj
   const userCollection=req.app.get('users');
   //get id from url
   const usernameURL=req.params.username;
   //find user by id
   let user=await userCollection.findOne({username:{$eq:{usernameURL}}});
   //send res
   res.send({message:"user",payload:user})
})


//route to post or create user
userApp.post('/user',async (req,res)=>{
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
        //save user
        await userCollection.insertOne(user)
        //send res
        res.send({message:"user created",payload:existUser})
    }

})

userApp.post('/login',async(req,res)=>{

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
            let signedToken=jwt.sign({username:user.username},'abcdef',{expiresIn:'20'})
            //send res
            res.send({message:"login success",token:signedToken,user:user})
            }
    }
})

//route to update user
userApp.put('/user',async (req,res)=>{

})

//route to delete user
userApp.delete('/user/:id',async (req,res)=>{
   
})

module.exports = userApp;