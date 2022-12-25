const {
  sellBulkTicket,
  sellSingleTicket,
  findAll,
  findByUsername,
  findById,
} = require("./controllers");

const router = require("express").Router();

// router.get("/t/:id");
// router.put("/t/:id");
// router.delete("/t/:id");

router.route("/t/:id").get(findById).put().delete();

router.route("/u/:username").get(findByUsername).put().delete();

// router.get("/u/:username");
// router.put("/u/:username");
// router.delete("/u/:username");

router.post("/bulk", sellBulkTicket);
router.get("/draw");

router.route("/").get(findAll).post(sellSingleTicket);

// router.post("/");
// router.get("/");

module.exports = router;
