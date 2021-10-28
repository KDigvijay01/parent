require('../database/connection');

const moongoose=require('mongoose');

const dataSchema=moongoose.Schema({
    s_no:Number,
    quote:{
        type:String,

    },
    author:{
        type:String,
    }
});
const entity=moongoose.model('item',dataSchema);

module.exports=entity;
