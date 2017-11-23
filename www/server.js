var express= require('express');
var bp = require('body-parser');
var _ = require('underscore');
var db=require('./db.js');

var app = express();
app.use(bp.json());

var userdata =[];
app.use(express.static('public'));

app.post('/postuserdata',function(req,res){
    var body = req.body;
    userdata.push(body);
    res.json(userdata);

})

app.post('/posttodo',function(req,res){
    var body = _.pick(req.body,'Name','Address','Email','DOB','Rent');
    db.todo.create(body).then(function(todo){
       
        res.json(todo.toJSON());
    }, function(e){
        res.json(400).json(e);
    })
    
})

app.get('/getuserdata',function(req,res){
    
    res.json(userdata);

})

db.sequelize.sync().then(function(){
app.listen(3400,function(){
    console.log('server is starting');
})
})