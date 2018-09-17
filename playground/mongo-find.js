const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to server");
    }

    console.log("Connected to MonogoDB");
    const db = client.db("TodoApp");
    db.collection("Todos")
      .find()
      .count()
      .then(
        count => {
          console.log("Todos count:", count);
        },
        err => {
          console.log("Unable to find todos.", err);
        }
      );

    // client.close();
  }
);
