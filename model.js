const mongoose = require('mongoose');

const KanBanTasksSchema = mongoose.Schema('tasksModel', {
    name: String,
    cards: Array,
});

const KanBanUserSchema = mongoose.Schema('userTasks', {
    username: { type: String, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true},
    tasks: [],
    cards: [],
});

const Task = mongoose.Model('Task', KanBanTasksSchema);
const UserTasks = mongoose.Model('UserTasks', KanBanUserSchema);

module.exports.Task = Task;
module.exports.UserTasks = UserTasks;
