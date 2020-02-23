const mongoose = require('mongoose');
const Schema = mongoose.Schema

const KanBanSchema = Schema({
    password: { type: String, required: true},
    email: { type: String, required: true},
    tasks: [String],
});

const Tasks = mongoose.model('Tasks', KanBanSchema)
module.exports.Tasks = Tasks
