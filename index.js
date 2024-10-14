const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Hello World2!");
});
app.get("/my", (req, res) => {
  res.send("Hello World3!");
});
app.get("/jokes", (req, res) => {
  const jokes = [
    { id: 1, content: "this is a joke" },
    { id: 2, content: "this is a joke1" },
    { id: 3, content: "this is a joke2" },
    { id: 4, content: "this is a joke4" },
    { id: 5, content: "this is a joke5" },
  ];

  const fiveJokes=jokes.slice(0,5)
  res.send(fiveJokes);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
