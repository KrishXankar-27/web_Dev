/*
express.js framwork
introduction of express js
setting up a basic expree application
routing
miiddleware
request and response handeling
Error Handelling 
*/

const express = require('express')

const app = express();

app.get("/" , function(req ,res){
    res.send("hi bhai ")
})
app.get("/pro" , function (req , res) {
    res.send("i want today install LOL")
})

app.listen(3000)