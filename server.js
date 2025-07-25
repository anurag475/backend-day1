const express = require("express")
const connectTODB=require('./src/db/db')
//server database se connect hoga server.js file me
connectTODB()
const app=express()
app.use(express.json())
app.post('/notes',(req,res)=>{
const {title,content}= req.body
   console.log(title,content)
   

})

app.listen(3000,()=>{
    console.log("server is running on port 3000")

})