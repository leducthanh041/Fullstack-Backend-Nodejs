require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Config template engine
configViewEngine(app);

// route declaration
app.use("/", webRoutes);

// test connection

// A simple SELECT query
connection.query("SELECT * FROM Users u;", function (err, results, fields) {
  console.log(">>> results= ", results); // results contains rows returned by server
  console.log(">>> fields= ", fields); // fields contains extra meta data about results, if available
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
