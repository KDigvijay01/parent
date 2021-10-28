console.log("Starting app.js")
require('dotenv').config();
const bcrypt = require('bcryptjs')
const entity=require("./model/db");
const express = require('express');
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const jwt=require('jsonwebtoken');
let auth=require('./middleware/auth');


const app=express();

app.use(cookieParser());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static('public'));

// console.log(process.env.SECRET_KEY);
app.get('/app',(req, res)=>{
    res.render('home')
})
app.get('/contact', auth,(req,res)=>{
    // console.log(`this is the cookie ${req.cookies.jwt}`)
    res.render('contact');
});


app.get('/',async (req,res) => {
    try{
        res.render('register');

    }catch(err){
        console.log(err)
    }
});


app.post('/register',async (req,res) => {
    try{
        const password =req.body.password;
        const cpassword = req.body.cpassword;
        if(password===cpassword){
            const item=new entity({
                full_name: req.body.full_name,
                user_name: req.body.user_name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                password: req.body.password,
                confirm_password: req.body.cpassword,
                });
            
        

        const token=await item.generateAuthToken();
        const registered=await item.save();

        // res.cookie('jwt', token,{expires:new Date(Date.now()+400000),httpOnly:true});        
        }else{
            res.status(404).send("Password not matching...");
        }
    }catch(err){
        console.log(err)
    }finally{
        res.render('home')
    }
});

app.get('/login',(req, res) =>{
    res.render('login')

});

app.post('/verify',async (req, res) =>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const user=await entity.findOne({ email: email});
        if(user===null){
            res.render('register')
        }else{
            const isMatch= bcrypt.compare(password,user.password);
            
            if (isMatch){
                const token= await user.generateAuthToken()
                res.cookie('jwt', token,{expires:new Date(Date.now()+5000),httpOnly:true}); 
                // console.log(token)
                res.render('home');
                
            }
        }
    }catch(err){
        console.log(err);
    }
});




let port =process.env.PORT ||8000;

app.listen(port, ()=>{
    console.log(`Listening To Port No. ${port}...`);
});
