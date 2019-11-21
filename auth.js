var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
var mysql = require('mysql');
var knex = require("knex")({
    client:"mysql",
    connection:{
        host : 'localhost',
        user : 'root',
        password : 'navgurukul',
        database : 'authentication'
    }
});

app.post("/sign-up",function(req,res){
    knex('users').insert({
        emailId: req.body.emailId,
        userName:req.body.userName,
        password:req.body.password
    })
    .then((data)=>{
        res.send(data+"\nsuccessfully sign up ")
    })
    .catch((err)=>{
        res.send(err.sqlMessage + '\nPlease use another user emailId for signUp.')
    })
});

app.post("/log-in/:userName/:password",function(req,res){
   var userName=req.params.userName
   var password=req.params.password
    knex("users").select("*").from("users").where("userName",userName).where("password",password) 
    .then((data)=>{
        if (data.length > 0) {
            knex("login").insert({
                userName,
                password
            })
            .then((data) => {
                res.send(data +"\nsuccessfully log in")
            })
        }else{
            res.send("invalid password and userName.")
        }
    })
    
})

app.listen(3500,()=>{
    console.log("server is listening 3500 ....")

});