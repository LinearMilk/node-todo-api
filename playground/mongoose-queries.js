const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");

var id = "5ba240f8e5fafa1da3e936ef";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

Todo.find({
  _id: id
}).then(todos => {
  console.log("Todos", todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log("Todo", todo);
});

Todo.findById(id).then(todo => {
  console.log("Todo By Id", todo);
});
