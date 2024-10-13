const express = require("express");
require('dotenv').config()
const app = express();
const port =process.env.PORT;    ;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Hello World2!");
});
app.get("/my", (req, res) => {
  res.send("Hello World3!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
