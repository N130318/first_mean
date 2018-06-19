var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');

var app=express();

var route=require('./route/routes');

mongoose.connect('mongodb://localhost:27017/employee');

mongoose.connection.on('connected',()=>{
    console.log('MongoDB Connected at port 27017');
});

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

app.use(cors());

app.use(bodyparser.json());

app.use('/api',route);

app.get('/',(req, res)=>{
    res.send('Default Route Cames');
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log('Server Started at port: '+PORT);
});