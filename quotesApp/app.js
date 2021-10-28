console.log("Starting app.js");

let {LocalStorage}=require('node-localstorage');
let localStorage = new LocalStorage('./scratch')

const express = require('express');
const entity = require('./model/schema');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/',async(req,res)=>{
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let value=1;
    var arr=[];
    if(localStorage.getItem('keys')===null) {
        console.log("lengthh 0") 
    }
    else{
        arr=JSON.parse(localStorage.getItem('keys'));
        
        if(arr.indexOf(value)===-1){
            arr.push(value);
        }
        else{
                while(arr.indexOf(value)!==-1) {
                        const max=1640;
                        value= generateRandomIntegerInRange(1,max);
                        // console.log("The Random Value =",value);
                        if (arr.length===max){
                            // console.log("maximum limit exceeds");
                            localStorage.clear();
                            arr=[]
                            break;
                        }

                };
                arr.push(value)
        }
    }
    
    localStorage.setItem('keys',JSON.stringify(arr));
   

    const item=await entity.findOne({s_no:value},(err,f)=>{
            if(!err){
                
                const quote=f.quote;
                let author=f.author;
               
                if(author===null){
                    author="Unknown";
                }
                res.render('quotes',{quote:quote, author:author});
                
            }
            else {
                console.log("error aa gya ",err)
            }
        });     
});


const port=process.env.PORT ||8000;
app.listen(port,()=>{
    console.log(`Listening To Port No. ${port}... `)
});
