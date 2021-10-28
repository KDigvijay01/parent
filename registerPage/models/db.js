require('../database/conn')
const mongoose=require('mongoose');

const bcrypt=require('bcryptjs');

const jwt=require('jsonwebtoken');

const dataSchema=mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    user_name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true

    },
    gender:String,
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});
// {
//     full_name: 'Digvijay Kumar',
//     user_name: 'kdigvijay01',
//     email: 'kumardigvijay01@gmail.com',
//     phone: '+919955775882',
//     password: 'digvijay',
//     cpassword: 'digvijay',
//     gender: 'male'
//   }
dataSchema.methods.generateAuthToken=async function(){
    try{
        const token= await jwt.sign({_id:this._id},process.env.SECRET_KEY,{expiresIn:"2 seconds"})
        // console.log(`This is my token ${token}`);

        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token

        

    } catch(err){
        console.log("The error Page");
    }
}

dataSchema.pre('save',async function(next){
    try{
        if(this.isModified('password')){
            const newPassword = await bcrypt.hash(this.password,10);
            this.password=newPassword;
            this.cpassword=newPassword;
        }
        next();
    }catch(err){
        console.log(err);
    }
} )

const entity=mongoose.model('Data',dataSchema);

console.log('now exporting entity....');

module.exports = entity;