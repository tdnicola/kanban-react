const mongoose = require('mongoose');
const Schema = mongoose.Schema

const KanBanUserSchema = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true},
    tasks: [],
    cards: [],
});

module.exports = mongoose.model('UserTask', KanBanUserSchema);
