const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Model = require('./model');

const Users = Model.Users;

const app = express();

app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/kanban', {useNewUrlParser: true});

//get request, gives all users.
app.get('/users', (req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error " + error);
    });
});

//get information on one user.
app.get('/users/:Email', (req, res) => {
    Users.findOne({ Email : req.params.Email})
    .then((user) => {
        res.json(user)
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("error " + error)
    })
})

//create user. gives default todo,inprogress,completed tasks for new user.
app.post('/users', ((req, res) => {
    Users.findOne({ Email : req.body.email })
    .then((email) => {
        if (email) {
            res.status(400).send(req.body.email + ' Already Exists!' )
            console.log(req.body)
        } else {   
            Users
            .create({
                Email: req.body.email,
                Password: req.body.password,
                Tasks: 
                    [
                        {
                            Card: "todo",
                            Todo: ["start"]
                        },
                        {
                            Card: "inprogress",
                            Todo: ["moving along"]
                        },
                        {
                            Card: "completed",
                            Todo: ["done"]
                        }
                    ]
            })
            .then((user) => {res.status(201).json(user) })
            .catch((error) => {
                console.error(error);
                res.status(500).send('error: ' + error);
            })
        }
    }).catch((error) => {
        console.error(error);
        res.status(500).send('error' + error); 
    });
}));


//update tasks by email
app.put('/tasks/:Email', (req, res) => {
    Users.updateOne({ Email: req.params.Email }, { $set : 
    {
        Email : req.body.email,
        Password: req.body.password,
    }},
    { new : true})
    .then((user) => { 
        console.log(req.body, req.params);
        res.status(201).json(user) 
    })
    .catch((error) => {
        console.log(req.body);
        res.status(500).send('error ' + error);
    });
});

app.listen(3000, () => {
    console.log('Connected on port 3000')
});
