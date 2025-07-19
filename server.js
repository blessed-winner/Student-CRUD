const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/route');

const app = express();

app.use(express.json());

app.use('/api',route);

mongoose.connect('mongodb://localhost:27017/studentDB').then(() => console.log("Database connected successfully")).catch((e)=>console.log({Error:e.message}));

app.listen(3400,()=>console.log("Server running at port 3400 ..."));

