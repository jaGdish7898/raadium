require('dotenv').config()
const express=require("express")
const app=express()
app.get("/",function(req,res){
    console.log(process.env.PORT)
    res.send("hi from express")
    
})

app.listen(3000,()=>{
    console.log(`running on port ${process.env.PORT}`)
})