const express= require('express');
const app=express();

app.listen(3000,function(){
    console.log('server in ascolto su porta 3000');

});

app.use(express.static('public'));
