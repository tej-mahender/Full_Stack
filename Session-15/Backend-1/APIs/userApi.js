
const exp = require('express');
const userApp = exp.Router();

//app body parser middleware
userApp.use(exp.json())

//test data
let userData=[
    {id:1,name:'kalki'},
    {id:2,name:'karnan'}
]


//create sample rest api(req handlers-routes)
//route for get users
userApp.get('/users',(req,res)=>{
    res.send({message:"all users",payload:userData})
})

//route to get specific user by id
userApp.get('/users/:id',(req,res)=>{
    //get id from url
    let id=req.params.id; //returns id from url
    //find user by id
    let user=userData.find((user)=>user.id==id);
    if(user===undefined){
     res.send({message:'user not found'})
    }
    else{
    res.send({message:'specific user',payload:user})
    }
})


//route to post or create user
userApp.post('/user',(req,res)=>{
    //get new user from req
    let newUser=req.body;
    //add new user to array
    userData.push(newUser);
    //send response
    res.send({message:'user created'})
})

//route to update user
userApp.put('/user',(req,res)=>{
    //get modified user from url
    let modifiedUser=req.body;
    //find index of user in userData with modified Userid
    let index=userData.findIndex((user)=>user.id==modifiedUser.id);
    if(index===-1){
        res.send({message:'user not found'})
    }
    else{
    //update user in array
    userData[index]=modifiedUser;
    //send response
    res.send({message:'user updated'})
    }
})

//route to delete user
userApp.delete('/user/:id',(req,res)=>{
    //get id from url
    let id=req.params.id;
    //find index of user in userData with id
    let index=userData.findIndex((user)=>user.id==id);
    if(index===-1){
        res.send({message:'user not found'})
        }
        else{
            //delete user from array
            userData.splice(index,1);
            //send response
            res.send({message:'user deleted'})
        }
})

module.exports = userApp;