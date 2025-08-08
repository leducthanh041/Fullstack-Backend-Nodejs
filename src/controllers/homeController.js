const connection = require("../config/database");

const getHomePage = (req, res) => {
  // process data
  // call model
  users = [];
  connection.query("SELECT * FROM Users u;", function (err, results, fields) {
    users = results;
    console.log(">>> results= ", results); // results contains rows returned by server

    console.log(">> check users: ", users);
    res.send(JSON.stringify(users));
  });
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getHoiDanIT,
};
