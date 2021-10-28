console.log("starting app.js");

const express = require('express');

const request = require('request');

const bodyParser = require('body-parser');

const app=express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
// app.set('views','/views')
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home')
});

app.post('/home',(req, res) => {
    const nameofcity=req.body.type;
    
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${nameofcity}&appid=7a3a697f5bd64e14c41e138a9f0ba418`;
    request(url,(err,response,body)=>{
        const data=JSON.parse(body);
         
        if(data.cod===200){
                const data=JSON.parse(body);
                
                const condition=data.weather[0].main;
                const current=Math.round(data.main.temp-277);
                const min=Math.round(data.main.temp_min-277);
                const max=Math.round(data.main.temp_max-277);
                const country=data.sys.country;
                const city=data.name;
                var d = new Date();
                const arr=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
                var number = d.getDay();
                const day=arr[number-1];

                res.render('index',{day:day,condition:condition,city:city,min:min,max:max,current:current,country:country});
        }else{
             res.render('return')
        }
    });
    
});

app.get('/back',(req,res)=>{
    res.redirect('/')
})


const port=process.env.PORT ||8000;

app.listen(port, ()=>{
    console.log(`Listening To Port No. ${port}...`);
});



