require("dotenv").config();
const express = require("express");
const connect = require("./db");

const postRoutes = require("./routes/posts");

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRoutes);

const port = process.env.PORT || 7000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("db connected");
    app.listen(port, console.log("Server spinning"));
  } catch (error) {
    console.log(error);
  }
};

start();
