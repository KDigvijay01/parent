const express=require('express');

const router=express.Router()

router.get('/app',(req, res)=>{
    res.send("Hello from Router")
})

router.get('/about', (req, res)=>{
    res.send("Hello from About us page")
});


module.exports = router