const express = require("express");
const { getHomePage, getHoiDanIT } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiDanIT);

module.exports = router;
