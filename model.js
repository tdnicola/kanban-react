const mongoose = require('mongoose');

const KanBanTasksModel = mongoose.Schema('tasksModel', {
    name: String,
    cards: [ String ]
});

const KanBanUserModel = mongoose.Schema('userModel', {
    tasks: String,
})