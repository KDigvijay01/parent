console.log("starting app.js");
require('dotenv').config();
const mongoose=require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const rejister=require('./model/rejister');
const entry=require('./model/entry')



app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

const port=process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send("Hi There");

})
app.post('/',(req,res)=>{
    const data=req.body;
    const item=new rejister({
        name:data.name,
        roll_no:data.roll_no,
        branch:data.branch,
        batch:data.batch,
    })
    const saving=item.save();
    res.send(item);

})

app.post('/entry',(req,res)=>{
    const data=req.body;
    const date= new Date();
    const mssg=req.body.mssg;
   
    const searchitem=rejister.findOne({roll_no:data.roll_no},(err,f)=>{
        if(!err && mssg==="in"){
            const serch=entry.findOne({roll_no:data.roll_no,checkout:null},(err,d)=>{
                if(!err && d===null){
                    const item= new entry({
                        name:f.name,
                        branch:f.branch,
                        roll_no:f.roll_no,
                        gatein:date,
                        checkout:null
                })
                const saving=item.save()
                console.log('in kiya h')
                res.send(item);
            }else{
                res.send("phle out to kro")
            }
            
        });
    }
        else if(!err && mssg==="out"){
            const ite= entry.findOneAndUpdate({roll_no:data.roll_no,checkout:null},{$set:{checkout:date}},(err,d)=>{
                if(!err){
                    if(d===null){
                        console.log("update errr...");
                        res.send("bckchodi mat kro...")
                    }else{
                        console.log("update done");
                        res.send("out kiya h");
                    }
                }
                else{
                    console.log("error in updation...")
                }
            });
        }
        else{
            res.send(err);
        };
    });
});

app.post('/getinfo',(req,res)=>{
    const data = req.body;
    const item=rejister.findOne({roll_no:data.roll_no},(err,f)=>{
        if(!err){
            console.log("rejister se..",f);
        }
        else{
            console.log("err...",err);
        }
    });
    const get=entry.find({roll_no:data.roll_no},(err,f)=>{
        if(!err){
            console.log("entry se...",f);
        }
        else{
            console.log("errr in get",err);
        }
    });
    res.send("hello")

});

app.get('/alreadyin',(req,res)=>{
    const items=entry.find({checkout:null},(err,f)=>{
        if(!err){
            console.log("andar h...",f);
        }
        else{
            console.log(err)
        }
        res.send("data")
    

    });
});


app.listen(port,()=>{
    console.log(`Listening To port no. ${port}.....`)
});