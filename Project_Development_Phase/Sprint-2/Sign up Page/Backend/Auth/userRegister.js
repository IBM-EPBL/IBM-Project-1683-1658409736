const express=require('express')
const mongoose=require('mongoose')
const Router=express.Router()
const Userschema=mongoose.model("Userschema")

module.exports = (req,res)=>{
    var UserName=req.body.UserName;
    var Password=req.body.Password;
    var email=req.body.email;
    var Phno=req.body.Phno;
    //console.log(UserName)
    if(!UserName || ! Password || !email || !Phno)
    {
        res.json({
            error:"Please fill all the Fields Properly to Register!!"
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
        var register = new Userschema({
            UserName,Password,email,Phno
                })
        register.save()
        .then((data)=>{
            if(data)
            {
                res.json({
                   Success:"Registration Scuccessfull!!"
                })
                res.status(200) 
            }
            else
            {
                res.json({
                    error:"No data Found or Missing!!"
                 })
                 res.status(404) 
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}