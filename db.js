const mongoose=require("mongoose")


function connectTODB(){
    mongoose.connect("mongodb+srv://anurag12:dr6bLrtKRiOOmwbg@cluster0.b570hcb.mongodb.net/cohort").then(()=>{
        console.log("connected to db")
    })
}
module.exports=connectTODB