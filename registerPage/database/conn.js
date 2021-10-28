console.log("starting connection to database");

const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/Dataofweb',{ useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("connected to database")
    }
    else{
        console.log(err)
    }
});