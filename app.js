const express = require('express');
const app =express();
const bodyParser = require('body-parser');
var multer = require('multer');
var upload= multer();

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());
app.use(upload.array());

const ContactRouter= require('./routes/contact');

app.use('/contact',ContactRouter);

app.use((req,res,next)=>{
    res.status(200).json({
        message:'Hello, Welcome my API !!!!!!!!!'
    });
    next();
});

module.exports = app;