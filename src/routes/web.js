const express = require("express");
const {
  getHomePage,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiDanIT);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
