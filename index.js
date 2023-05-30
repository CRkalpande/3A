const express =require('express');
const abc =express();

const path= require("path");

const PORT= 8000
abc.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

abc.listen(PORT,function(){
    console.log('server listening on port::${PORT}');
});