const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiroutes = require("./routes/workoutRoute");
const htmlroutes = require("./routes/htmlExercise");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(apiroutes);
app.use(htmlroutes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const { MongoClient } = require("mongodb");

// Connection URI
// const uri =
//   "mongodb://localhost/workout:27017";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);




// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
