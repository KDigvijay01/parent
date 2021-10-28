console.log("starting app.js");
const express = require('express');
const ejs=require('ejs')
const QRCode = require('qrcode')
const bodyParser = require('body-parser')
const fs=require('fs')
// const fsExtra = require('fs-extra')
const path = require('path')


const app=express();
app.set('view engine','ejs');
app.set('views','./views')
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/',(req,res)=>{
    const data=req.body;
    let roll_no=data.roll_no;
  
    const stringData=JSON.stringify(data);
    const generateQR = async function generate(data,roll_no) {
            try {
            await QRCode.toFile(`./public/css/QR/${roll_no}.png`, data);
            } catch (err) {
            console.error(err)
            };
        };
    generateQR(stringData,roll_no);
    res.render('qrpage',{file:roll_no});
});




const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`Listening To Port No. ${port}...`);
});
