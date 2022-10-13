const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  mongodb  = require('./config/connection')
const app = express();

const PORT = process.env.PORT || 8080;



app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require(''));

  mongodb. initDb((err,  mongodb) => {
  if (err) {
    console.log(` not working`);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${PORT}`);
  }
});
