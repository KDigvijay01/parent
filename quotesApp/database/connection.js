require('dotenv').config();
const mongoose=require('mongoose');

mongoose.connect(process.env.CONNECT_DB,{ useUnifiedTopology: true ,useNewUrlParser: true },(e)=>{
    if(!e){
        console.log("Connected To Database");

    }else{
        console.log("Error Connecting Database",e);
    }
});

