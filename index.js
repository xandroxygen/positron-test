const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const server = app.listen(3003, () => {
  console.log("app listening on 3003");
});

// change 1
// change 2
// change 3
// change 4
// change 5
// change 6A
// change 7
// change 8
// change 9

module.exports = server;
