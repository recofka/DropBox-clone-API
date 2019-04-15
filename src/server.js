const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb+srv://recofka:recofkadb@cluster0-fyhzz.mongodb.net/dropBox?retryWrites=true', 
    {
    useNewUrlParser: true
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

app.listen(5000);