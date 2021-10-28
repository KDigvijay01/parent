const Joi = require('joi')

// const validator = require('validator')

// const { json } = require('body-parser');

const express=require('express')

const app=express();

app.use(express.json())

const arr=[{id:1,name:"course1"},{id:2,name:"course2"},{id:3,name:"course3"}]


app.get('/api/',(req,res)=>{
    res.send("<h1>Hello From This side</h1>");
})

app.get('/api/course',(req,res)=>{
    res.send(arr)
})
app.get('/api/course/:id',(req,res)=>{
    const courses=arr.find(n=>n.id===parseInt(req.params.id));
    // console.log(course);
    if(!courses) return res.status(404).send("The course with This ID is not Found.")
    res.send(courses)

})


app.post('/api/course',(req,res)=>{
   
    if (!req.body.name||req.body.name.length<3){
        res.status(404).send("Name is not Valid")
        return
    }
    const course={
        id:arr.length+1,
        name:req.body.name
    }
    arr.push(course)
    res.send(course)
})



app.put('/api/course/:id',(req,res)=>{
    const course=arr.find(n=>n.id==parseInt(req.params.id));

    if (!course){
        res.status(404).send("Not a valid id")
        return
    }
    if (!req.body.name||req.body.name.length<3){
        res.status(400).send("Name is not Valid")
        return
    }
    course.name=req.body.name;
    res.send(course)
})



app.delete("/api/course/:id",(req,res)=>{
    const course=arr.find(n=>n.id==parseInt(req.params.id))
    if (!course){
        res.status(404).send("Not a valid course id")
        return
    }
    const index=arr.indexOf(course)
    arr.splice(index,1)
    res.send(course) 
})

const port=process.env.PORT ||8000;
app.listen(port,()=>{
    console.log(`Listening TO port No. ${port}...`);
})