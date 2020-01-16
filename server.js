const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const UserTasks = require('./model');

var app = express();
app.use(bodyParser.json());
app.use(cors())
mongoose.connect('mongodb://localhost/kanban', {useNewUrlParser: true});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

app.listen(3000, () => {
    console.log('Connected on port 3000')
});
