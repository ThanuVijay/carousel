const express = require("express");
const router = express.Router();
module.exports = router;
router.use("/api/carousel", require("./carousel.routes"));
