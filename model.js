const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UsersSchema = Schema({
    Password: { type: String, required: true},
    Email: { type: String, required: true},
    Tasks: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Cards' }],
});

const CardsSchema = Schema({
    Cards: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Tasks' }]
});

const TasksSchema = Schema({
    Tasks: [String]
});

const Users = mongoose.model('Users', UsersSchema)
const Cards = mongoose.model('Cards', CardsSchema)
const Tasks = mongoose.model('Tasks', TasksSchema)

module.exports.Users = Users
module.exports.Cards = Cards
module.exports.Tasks = Tasks

