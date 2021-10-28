const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    slectedFile:{
        type:String,
        default:"hi"
    },
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
});


const PostMessage =mongoose.model('PostMessage', postSchema);

module.exports = PostMessage;