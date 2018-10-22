const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model

const ToDoSchema = new Schema({
  item: String
});

const ToDo = mongoose.model('todo', ToDoSchema);

module.exports = ToDo;
