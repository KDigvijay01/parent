console.log("starting app.js");
const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors')
const app=express();

const router= require('./routes/router')


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router)

const port=process.env.PORT ||8000;
app.listen(port, () => {
    console.log(`Listening On Port No ${port}....`)
})

