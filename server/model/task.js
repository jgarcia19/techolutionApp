const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: String
});

module.exports = mongoose.model('Task', taskSchema);