const express = require('express');
const mongoose = require('mongoose');

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

app.listen(5000);