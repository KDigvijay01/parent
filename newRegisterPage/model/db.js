require('../database/conn')
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dbSchema=mongoose.Schema({
    full_name: {
        type: 'String',
        required: true,
    },
    user_name: {
        type: 'String',
        required: true,
        unique: true,
    },
    email: {
        type: 'String',
        required: true,
        unique: true,
    },
    phone: {
        type: 'String',
        required: true,
        // unique: true,
    },
    gender: {
        type: 'String',
        required: true,
        
    },
    password: {
        type: 'String',
        required: true,

    },
    confirm_password: {
        type: 'String',
        required: true,
    },
    tokens:[{
        token:{
            type: 'String',
            required: true,
        }
    }]
});


dbSchema.methods.generateAuthToken=async function(){
    try{
        const token=await jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token

    }catch(err){
        console.log('here is the error....',err)
    }
}




dbSchema.pre('save',async function(next){
    if(this.isModified('password')) {
        const password = await bcrypt.hash(this.password,10);
        this.password = password;
        this.confirm_password=this.password;
      }
      next()
});



const entity=mongoose.model('Datas',dbSchema);

console.log("Now Exporting Entity");

module.exports = entity;