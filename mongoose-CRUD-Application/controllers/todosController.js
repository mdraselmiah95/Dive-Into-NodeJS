const Todo = require("../models/todoSchema");

exports.allTodoGetController = async (req, res) => {};

exports.TodoGetByIdController = async (req, res) => {};

exports.TodoPostController = async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error 💥",
      });
    }
  });
};

exports.TodoMultiplePostController = async (req, res) => {};
exports.TodoPutController = async (req, res) => {};
exports.TodoDeleteController = async (req, res) => {};
