console.log("hello world");
const path=require('path');

const express=require('express');

const app=express()

const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.set('views','./views')

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.q2vkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/ToDoApp',{useCreateIndex:true,useNewUrlParser: true,useUnifiedTopology: true },(e)=>{
    if(!e){
        console.log("Connected To Database....");
    
    }else{
        console.log(e);
    }
});

const itemSchema=mongoose.Schema({
    name:{type:String,required:true}
    
});

const entity=mongoose.model('Task',itemSchema);

const item=new entity({
    name:"Welcome Now Start adding to the todo list",
});



const arr=[item];



app.get('/',(req,res)=>{
    
    entity.find({},(err,f)=>{
        if(f.length===0){
            entity.insertMany(arr,(e)=>{
                if(!e){
                    console.log("succesfully added to database");
                }else{
                    console.log(e);
                }
            })
        res.redirect('/');
        }else{
            res.render('home',{newitem:f});
        }
    });
});

app.post('/',(req,res)=>{
   const newTask=req.body.task;
    
    
    const newItem= new entity({
        name:newTask,
    });
    if(newItem.name.length>3){
        entity.insertMany(newItem);
        res.redirect('/');
    }else{
        console.log("write a valid todo");
    }
    
});


app.post('/delete',(req,res)=>{
    const result=req.body
    
    entity.deleteOne(result,(e)=>{
        if(!e){
            console.log("Succesfully Removed...")
            res.redirect('/');

        }else{
            console.log(e);
        }
    })
    
});

app.post('/deleteall',(req,res)=>{
    entity.deleteMany({},(err,f)=>{
       
        res.redirect('/');
    });
    
})

 var port=process.env.PORT ||8000

app.listen(port,()=>{
    console.log(`Listening TO Port No. ${port}...`);
});