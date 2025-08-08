const express = require("express");
const {
  getHomePage,
  getHoiDanIT,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiDanIT);

router.post("/create-user", postCreateUser);

module.exports = router;
