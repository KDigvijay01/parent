console.log("Starting app.js...")

const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("connection successful")
})
.catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll_no:{
        type:String,
        required:true
    },
    branch:String,
    batch:Number,
    hostel_status:{
        is_hostler:{
            type:Boolean,
            required:true
        },
        room_no:Number
    }
});

const Student = mongoose.model('Student',studentSchema);

// const createStudent= async ()=>{
//     try{
//         const createStudent1= Student({
//             name:"Digvijay Kumar",
//             roll_no:"17CS35",
//             branch:"CSE",
//             batch:2017,
//             hostel_status:{
//                 is_hostler:false,
//                 room_no:00000
//             }});
//         const createStudent2= Student({
//             name:"Manish Kumar",
//             roll_no:"17CS11",
//             branch:"CSE",
//             batch:2017,
//             hostel_status:{
//                 is_hostler:true,
//                 room_no:222,}
//             });
//         const result = await Student.insertMany([createStudent1,createStudent2],{"ordered":false})

//         // console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// const createdb=createStudent();

module.exports =Student;