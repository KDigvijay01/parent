console.log("Starting App.js")
// require('dotenv').config();
const bodyParser = require('body-parser');
const express=require('express');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');

const entity= require('./models/db');
// const { getMaxListeners } = require('./models/db');

// const auth = require('./middleware/auth');


const app=express();

app.use(cookieParser);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))
app.set('view engine','ejs');

app.get('/api/',(req,res)=>{
    res.render('rejister')
    // res.send("hi")
});


// console.log(process.env.SECRET_KEY);

// app.post('/register',async(req,res)=>{
//     try{
//         const password = req.body.password;
//         const cpassword = req.body.cpassword;
//         if(password===cpassword){

//             // console.log(req.body);
//             const item=new entity({
//                 full_name: req.body.full_name,
//                 user_name: req.body.user_name,
//                 email: req.body.email,
//                 phone: req.body.phone,
//                 password: req.body.password,
//                 cpassword: req.body.cpassword,
//                 gender: req.body.gender
//             });
//             // console.log(item);

//         const token = await item.generateAuthToken();

        
//         const registered=await item.save();
//         // res.render('home')
//         res.cookie('jwt',token,{expires:new Date(Date.now()+500000),httpOnly:true});
//         }
//         else{
//             res.status(400).send("password doesn't match")
//         }
//     }catch(err){
//         console.log(`This is the error for your page ${err}....`)
//         res.redirect('/');
//     }finally {
//         console.log("The Finally Block....")
        
//         res.render('home')
//     }
// });

// app.get('/login',(req, res)=>{
//     res.render('login');
// });
// app.post('/verify',async (req, res)=>{
//     try{
//         const data=req.body;
//         const email=data.email;
//         const password=data.password;
//         const user= await entity.findOne({ email: email});
//         if(user===null){
//             res.send("NOT A VALID USER... RETURN AND REJGISTER")
//         }else{
//             // console.log(`printing the user ${user}`)
//             const ismatch=await bcrypt.compare(password,user.password);
//             if(ismatch){
//                 const token =await user.generateAuthToken();
//                 res.cookie('jwt',token,{expires:new Date(Date.now()+500000),httpOnly:true});
//                 res.render('home')
//             }else{
//             res.status(400).send("Invalid user credentials....")
//             }
//         }
//     }catch(err){
//         console.log(`Here is a error ${err}`)
//     }
// });

// app.get('/contact',auth,async(req, res)=>{
//     try{
//         res.render('contact');
//     }
// })


let port=process.env.PORT||8000;

app.listen(port,()=>{
    console.log(`Liste To Port No. ${port}...`);

});