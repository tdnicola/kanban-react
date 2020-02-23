const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Model = require('./model');

const Tasks = Model.Tasks

const app = express();

app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/kanban', {useNewUrlParser: true});

app.get('/', (req, res) => {
    Tasks.find().then(users => res.json(users))
})


app.post('/users', ((req, res) => {
    Tasks.findOne({ Email : req.body.Email })
    .then((email) => {
        if (email) {
            return res.status(400).send(req.body.Email + ' Already Exists!')
        } else {
            Tasks
            .create({
                Email: req.body.Email,
                Password: req.body.Password,
                Tasks: [
                    {
                        "todo":[
                            "start"
                        ]
                    },
                    {
                        "inprogress":[
                            "moving along"
                        ]
                    },
                    {
                        "completed":[
                            "done"
                        ]
                    }
                ]
            })
            .then((email) => {res.status(201).json(email) })
            .catch((error) => {
                console.error(error);
                res.status(500).send('error: ' + error);
            })
        }
    }).catch((error) => {
        console.error(error);
        res.status(500).send('error' + error); 
    });
  }))

app.listen(3000, () => {
    console.log('Connected on port 3000')
});
