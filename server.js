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

//get request, gives all users.
app.get('/users', (req, res) => {
    Tasks.find()
    .then(users => res.json(users))
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error " + error);
    });
});

//get information on one user.
app.get('/tasks/:Email', (req, res) => {
    Tasks.findOne({ Email : req.params.Email})
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
    Tasks.findOne({ Email : req.body.email })
    .then((email) => {
        if (email) {
            res.status(400).send(req.body.email + ' Already Exists!' )
            console.log(req.body)
        } else {
            console.log(req.body)
            Tasks
            .create({
                Email: req.body.email,
                Password: req.body.password,
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
}));


//update tasks by email
app.put('/tasks/:Email', (req, res) => {
    Tasks.findOneAndUpdate({ Email: req.params.Email }), { $set : {
        Email : req.body.Email,
        Password: req.body.Password,
    }}
})

app.listen(3000, () => {
    console.log('Connected on port 3000')
});
