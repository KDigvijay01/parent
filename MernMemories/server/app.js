console.log("starting app.js...");
const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');

const app = express();
const router=require('./routes/post')

app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use('/posts',router)

const Port = process.env.PORT ||5000
const url='mongodb://localhost:27017/Memory'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {app.listen(Port, ()=>{console.log(`Listening On Port No ${Port}...`)});})
    .catch(err => console.log("This is err in connection",err));

// mongoose.set('useFindAndModify', false);