const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: "   1   "
});

newUser.save().then(
  doc => {
    console.log("saved user", doc);
  },
  e => {
    console.log("unable to save user");
  }
);
//
// var newerTodo = new Todo({
//   text: "Clean",
//   completed: false,
//   completedAt: 0
// });
//
// newTodo.save().then(
//   doc => {
//     console.log("saved todo", doc);
//   },
//   e => {
//     console.log("unable to save todo");
//   }
// );
//
// newerTodo.save().then(
//   doc => {
//     console.log("saved todo", doc);
//   },
//   e => {
//     console.log("unable to save todo");
//   }
// );
