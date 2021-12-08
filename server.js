const express = require('express');
const app = express();
const mongoose =require('mongoose');
const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://gianna-admin:CoolScienceGirl123@cluster0.1ruwh.mongodb.net/FinalDatabase4',{useNewUrlParser:true},{useUnifedTopology:true});
//mongoose.connect('mongodb+srv://gianna-admin:CoolScienceGirl123@cluster0.1ruwh.mongodb.net/EmployedDb',{useNewUrlParser:true},{useUnifedTopology:true});
app.use(express.static(__dirname + '/stylesheets'));


const IntroInformationScehma = {

    Name:String,
    Pronouns:String,
    Email:String,
    Major:String,
    TypeofJob:String,
    
    Question3:String,
    Question4:String,
    Question5:String,
    Question6: String,
    Question7:String,
    Question8:String,
    Question9:String

}

// const EmployedInformationScehma = {

//     name:String,
//     job:String,
//     TypeofJob:String,
//     Question3:String,
//     Question4:String,
//     Question5:String,
//     Question6: String,
//     Question7:String,
//     Question8:String,
//     Question9:String



// }

const IntroInfo =mongoose.model("Intro",IntroInformationScehma);
// const EmployedInfo = mongoose.model("Employes",EmployedInformationScehma);




app.get("/",function(req,res){
    res.sendFile(__dirname+'/alumni-survey.html');
})

// app.get('/EmployedDataBase.html', function (req, res) {
//     res.sendfile(__dirname + '/EmployedDataBase.html');
// });




app.post("/",function(req,res){

    let newIntro= new IntroInfo ({
        Name:req.body.Name,
        Pronouns: req.body.Pronouns,
        Email:req.body.Email,
        Major:req.body.Major,
        Postgrad:req.body.Postgrad,
        TypeofJob:req.body.TypeofJob,
        Question3:req.body.Question3,
        Question4:req.body.Question4,
        Question5:req.body.Question5,
        Question6: req.body.Question6,
        Question7:req.body.Question7,
        // Question8:req.body.Question8,
        Question9:req.body.Question9
        


    });
    newIntro.save();
    res.redirect("/hjfk");
})


// app.post("/EmployedDataBase.html",function(req,res){

//     let EmployedIntro= newEmployedInfo ({
//         name:req.body.name,
//         job:req.body.job,
//         TypeofJob:req.body.TypeofJob,
//         Question3:req.body.Question3,
//         Question4:req.body.Question4,
//         Question5:req.body.Question5,
//         Question6: req.body.Question6,
//         Question7:req.body.Question7,
//         Question8:req.body.Question8,
//         Question9:req.body.Question9
    
        


//     });
//     newIntro.save();
//     res.redirect("/EmployedDataBase.html");
// })
app.listen(3000,function(){

    console.log("server working");
})