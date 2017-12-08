const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config= require('./config/database');
const path = require('path');

mongoose.connect(config.uri, (err)=>{
if(err){
    console.log('Could NOT connect to database:', err);
}
    else{       
        console.log('Connected to database: '+ config.db);
    }
}
, { useMongoClient: true });

mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res)=>{
    res.sendfile(path.join(__dirname +'/client/dist/index.html'));
  });
  
  app.listen(8080,() => {
      console.log('Listening on port 8080')
  });