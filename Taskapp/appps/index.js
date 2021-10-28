var express=require('express');
var bodyParser=require('body-parser');
var app= express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req, res)=>{
    res.render('list');
});

app.post('/',)

