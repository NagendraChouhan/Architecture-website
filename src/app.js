const express = require("express");
const path = require('path');
const hbs=require("hbs");
const db=require("./db/conn.js");
const UserDetail=require("./models/userdetail");
const adminDetail=require("./models/admindetail");
const app=express();

const port=process.env.PORT || 3000;

// app.use('/static', express.static(path.join(__dirname, '../index.js')));
const staticPath=path.join(__dirname,"../public");
const partialsPath=path.join(__dirname,"../views/partials");
app.set('view engine', 'hbs');
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

// app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
});
app.get("/moreproject",(req,res)=>{
    res.render('moreproject');
});
app.get("/contact",(req,res)=>{
    res.render('contact');
});

app.post("/contact", async(req,res)=>{
    try{
        const username=req.body.username;
        const useremail=req.body.useremail;
        const userphone=req.body.userphone;
        const useradd=req.body.useradd;
        const newUserDetail=new UserDetail({
            name:username,
            email:useremail,
            phone:userphone,
            address:useradd
        })
        // alert("Your request is recorder we contact you soon");
        const register=await newUserDetail.save();
        res.status(201).render("contact");
    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/projectDetails",(req,res)=>{
    res.render('projectDetails');
});
app.get("/login",(req,res)=>{
    res.render('login');
});
app.get("/otp",(req,res)=>{
    res.render('otp');
});
app.post("/login",async(req,res)=>{
    try {
        const adminemail=req.body.adminemail;
        const adminpass=req.body.adminpass;
        res.status(201).render("dashboard");
        
    } catch (error) {
        res.status(201).send(error);
    }

})
app.get("/dashboard",(req,res)=>{
    res.render('login');
});
app.post("/dashboard",(req,res)=>{
    UserDetail.find({},function(error,list){
        res.render('dashboard',{
            userList:list, 
        });
    })
    
});
app.get("/dashboard/singup",(req,res)=>{
    res.render("singup");
})
app.post("/dashboard/singup", async(req,res)=>{
    try{
        const adminPass=req.body.adminPass;
        const adminRPass=req.body.adminRPass;
        if(adminRPass===adminPass){
            console.log("inside if");
            console.log(adminRPass);
            console.log(adminPass);
            const adminName=req.body.adminName;
            const adminUsername=req.body.adminUsername;
            const adminNo=req.body.adminNo;
            const gender=req.body.gender;
            const Dob=req.body.Dob;
            const newadminDetail=new adminDetail({
                name:adminName,
                email:adminUsername,
                password:adminPass,
                phone:adminNo,
                gender:gender,
                dob:Dob,
            })
            const register=await newadminDetail.save();
            res.status(201).render("singup");
        }
        else{
            
            console.log(adminRPass);
            console.log(adminPass);
            console.log("inside else");
            var pass_class=document.getElementById("pass_class1");
            console.log("inside else1");
            console.log(pass_class);
            console.log("inside else2");
            pass_class.textContent="Password not match";
            console.log("inside else3");
        }

        // alert("Your request is recorder we contact you soon");
    }catch(error){
        res.status(400).send(error);
    }
})


app.listen(port,()=>{
    console.log('listen from port no ${port}')
    console.log(path.join(__dirname, '../public/'));
    console.log(path.join(__dirname,"../views/partials"));

})