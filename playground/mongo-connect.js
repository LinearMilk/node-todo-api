const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to server");
    }

    console.log("Connected to MonogoDB");
    const db = client.db("TodoApp");
    // db.collection("Todos").insertOne(
    //   { text: "something to do", completed: false },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert a Todo.", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    db.collection("Users").insertOne(
      { name: "Witold", age: 36, location: "Sweden" },
      (err, result) => {
        if (err) {
          return console.log("Unable to insert a user.", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

    client.close();
  }
);
