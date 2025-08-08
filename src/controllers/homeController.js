const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;

  console.log(">>> email= ", email, "name =", name, "city =", city);
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
    VALUES (?, ?, ?)`,
    [email, name, city]
  );

  console.log(`>>> check results: ${results}`);

  res.send("Created user succeed!");  
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
};
