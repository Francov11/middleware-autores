const express = require('express');

const morgan = require('morgan');

const {autores2} = require('./functions');

const app = express();

app.get("/autores", function(req, res){
    console.log(autores2);
    res.send(autores2);
});

app.post('/autores', function(req, res) {
    let autor = req.body;
    console.log(autor);
    arrayInfo.push(autor);
    res.send(autor);
});

app.listen(5000, function(){
    console.log('API port 5000 active....');
});
