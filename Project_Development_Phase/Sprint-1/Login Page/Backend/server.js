const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization');
    next();
  });

require('./Model/register')
mongoose.model("Userschema")

app.use("/register",require('./Auth/userRegister'))
app.use(require('../Backend/Auth/logging'))

mongoose.connect(process.env.URI.toString())
.then(() => {
    console.log('DataBase Connected Successfully!!');
    app.listen(process.env.PORT);
    console.log(`Listining in PORT ${process.env.PORT}`);
})
.catch(err => {
    console.log(err);
})