const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UsersSchema = Schema({
    Password: { type: String, required: true},
    Email: { type: String, required: true},
    Tasks: [{ 
        Card: String,
        Todo: Array
    }],
});

const Users = mongoose.model('Users', UsersSchema)

module.exports.Users = Users

