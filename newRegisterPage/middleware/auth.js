const jwt=require('jsonwebtoken');


const entity = require('../model/db');


let auth = async (req,res,next)=>{
    try{
        const token= req.cookies.jwt;
        const userVer=jwt.verify(token,process.env.SECRET_KEY);
        console.log(userVer);
        const user=await entity.findById({_id:userVer._id})
        console.log(user);
        next();

    }catch(err){
        console.log('The error in authorison is ');
        res.render('login')
        
    }
   
};

module.exports=auth;