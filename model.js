const mongoose = require('mongoose');
const Schema = mongoose.Schema

const KanBanSchema = Schema({
    Password: { type: String, required: true},
    Email: { type: String, required: true},
    Tasks: [],
});

const Tasks = mongoose.model('Tasks', KanBanSchema)
module.exports.Tasks = Tasks
