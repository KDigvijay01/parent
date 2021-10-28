console.log("Making Model...");

require('../conn');

console.log("Strating rejister...")
const mongoose=require('mongoose');

const dataSchema=mongoose.Schema({
    name:{
        type: String,
        required:true,
        
    },
    roll_no:{
        type: String,
        required:true
    },
    branch:{
        type: String,

    },
    batch:{
        type: String,
    },

    
})
const rejister=mongoose.model('rejister',dataSchema);

module.exports =rejister;
