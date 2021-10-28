require('dotenv').config();

const uri = process.env.DBURI_DATA;

const mongoose = require('mongoose');

mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false},(err)=>{
    if(!err){
        console.log("Successfully connected to Database");
    }else{
        console.log("Eroor connecting To database....")
    }
});