var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hello',function(req,res){
    res.send('Hello World');
});

app.listen(3000);
console.log('server running on 3000');