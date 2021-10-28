const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/DataOfWebs',{ useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex:true},(e)=>{
    if(!e){
        console.log("connected to MongoDB");
    }else{
        console.log("Error connecting to MongoDB")
    }
})
