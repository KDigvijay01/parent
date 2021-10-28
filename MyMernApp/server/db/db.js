const mongoose=require('mongoose');

const url='mongodb://localhost:27017/New'
mongoose.connect(url)
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err =>{
        console.log("Err connecting to database",err)
    })

const schema=mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true,
    },
    cpassword:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
        required: true,
    },
    data:{
        type:String
    }
})

const userId=mongoose.model('userDetail',schema)

module.exports=userId;