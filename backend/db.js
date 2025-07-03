const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://visheshvaidya2411:1234@cluster0.h4wmttq.mongodb.net/TodoApp")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todo = mongoose.model('TodoApp', todoSchema);


module.exports = {
    todo : todo
}