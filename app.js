var express = require('express');
var app = express();
var path = require('path');
var things = require('./things.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/',function(req,res){
    var name = req.body["video-url"];
    res.send('name is : '+name);
});

/*
//Simple request time logger
app.use( '/things' ,function(req, res, next){
    console.log("A new request received at " + Date.now());
    
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware function/route handler.
    
    next();
 });
 

app.use('/things',things);

*/
app.get('/hello',function(req,res){
    res.send('Hello World');
});

app.get('/:id',function(req,res){
    res.send('The id you specified is : '+req.params.id);
})

app.post('/hello',function(req,res){
    res.send('You just called the post at hello route');
});

app.listen(3000);
console.log('server running on 3000');