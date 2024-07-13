const jwt=require('jsonwebtoken')
const tokenVerify=(req,res,next)=>{
    //get bearerToken frpm "headers" property of req object
    const bearerToken = req.headers.authorization
    //if bearerToken is not present in headers
    if(bearerToken===undefined){
       return res.send({message:"Unauthorized access" })
    }
    //extract token from bearer token
    const token = bearerToken.split(' ')[1];
    //verify token
    try{
    let decode=jwt.verify(token,'abcdef');
    next();
    }catch(err){
        res.send({message:"token expired. Plz relogin"})
    }
}
module.exports=tokenVerify