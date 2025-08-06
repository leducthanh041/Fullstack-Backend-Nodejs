const getHomePage = (req, res) => {
  res.send("Hello World! and nodemon");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getHoiDanIT
};
