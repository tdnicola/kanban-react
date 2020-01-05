const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/kanban');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(3000, () => {
    console.log('Connected on port 3000')
})
