const mongoose = require('mongoose');

const KanBanTasksSchema = mongoose.Schema('tasksModel', {
    name: String,
    cards: [ 
        String 
    ]
});

const KanBanUserSchema = mongoose.Schema('userModel', {
    tasks: String,
});

const Task = mongoose.Model('Task', KanBanTasksSchema);
const User = mongoose.Model('User', KanBanUserSchema);

module.exports.Task = Task;
module.exports.User = User;
