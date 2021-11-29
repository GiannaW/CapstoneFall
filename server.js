const express = require('express');
const app = express();
const mongoose =require('mongoose');
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://gianna-admin:CoolScienceGirl123@cluster0.1ruwh.mongodb.net/IntroInformation',{useNewUrlParser:true},{useUnifedTopology:true});

const IntroInformationScehma = {

    Name:String,
    Pronouns:String,
    Email:String,
    Major:String

}

const IntroInfo =mongoose.model("Intro",IntroInformationScehma);




app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})


app.post("/",function(req,res){

    let newIntro= new IntroInfo ({
        Name:req.body.Name,
        Pronouns: req.body.Pronouns,
        Email:req.body.Email,
        Major:req.body.Major,
        Postgrad:req.body.Postgrad
        


    });
    newIntro.save();
    res.redirect("/");
})
app.listen(3000,function(){

    console.log("server working");
})