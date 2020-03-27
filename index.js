const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const server = app.listen(3003, () => {
  console.log("app listening on 3003");
});

module.exports = server;
