require('../conn')
console.log("starting entry...")

const mongoose=require('mongoose');

const dataSchema=mongoose.Schema({
    name:{type:String,required:true},
    branch:String,
    roll_no:String,
    gatein:{type:String},
    checkout:{type:String},    
})


const entry=mongoose.model('Entry',dataSchema)

module.exports=entry;