const {
  dashboardGetController,
} = require("../controllers/dashboardController");

const router = require("express").Router();

router.get("/", dashboardGetController);

module.exports = router;
