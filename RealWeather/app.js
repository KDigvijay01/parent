console.log("starting app.js...");

const express = require('express');

const app = express();
const request=require('request')


app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/img',express.static(__dirname + 'public/img'));



app.set('views','./views');
app.set('view engine','ejs');

app.get('/api/weather/city/:name',(req,res)=>{
    const city=req.params.name;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a3a697f5bd64e14c41e138a9f0ba418`;
    request(url,(err,response,body)=>{
        const bodydata=JSON.parse(body)
        convert=(temp)=>{
            return Math.round(temp-277)
        }
        const temp=convert(bodydata.main.temp).toString();
        const feels_like=convert(bodydata.main.feels_like).toString();
        const temp_min=convert(bodydata.main.temp_min).toString();
        const temp_max=convert(bodydata.main.temp_max).toString();
        
        console.log(temp)
        console.log(feels_like)
        console.log(temp_min)
        console.log(temp_max)

        res.render('index',{city:city,temp:temp,min:temp_min,max:temp_max,feels_like:feels_like})
    });
});




const port =process.env.PORT ||8000;
app.listen(port,()=>{
    console.log(`Listening To Port No. ${port}...`);
 });