const express = require("express");
const path = require("path");
require("dotenv").config();

// console.log(">>> check env: ", process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Config template engin
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Config static files
// app.use('/static', express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

// route declaration
app.get("/", (req, res) => {
  res.send("Hello World! and nodemon");
});

app.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
