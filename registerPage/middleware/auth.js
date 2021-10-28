// const jwt=require('jsonwebtoken');

// const entity=require('../models/db');


// const auth= async (req, res, next) => {
//     try{
//         const token=req.cookies.jwt;
//         const verify=jwt.verify(token,process.env.SECRET_KEY);
//         console.log(verify);

//         next()

//     }catch(err) {
//         console.log(err);
//     }

// }


// module.exports=auth;