const express=require('express')
const mongoose=require('mongoose')
const Router=express.Router()
const Userschema=mongoose.model("Userschema")

Router.post('/login',(req,res)=>{
    var {email,Password}=req.body;
    if(!Password || !email)
    {
        res.json({
            error:"Please fill all the Fields Properly to Log-In!!"
        })
        res.status(421)
    }
    else if(Password.length<8)
    {
        res.json({
            error:"Password Length Must Be Greater than or Equal to 8"
        })
        res.status(421)
    }
    else
    {
        Userschema.findOne({email:email})
        .then((result)=>{
                if(result.Password === Password )
                {
                    res.json({
                        success:"Login Successfull!!"
                    })
                }
                else
                {
                    res.json({
                        error:"Incorrect Password!!"
                    })
                }
            
        })
        .catch((err)=>{
            res.json({
                error:"Incorrect Email or Signup first!!"
            })
        })
    }
})
module.exports=Router