const router = require("express").Router();

router.get("/t/:id");
router.put("/t/:id");
router.delete("/t/:id");

router.get("/u/:username");
router.put("/u/:username");
router.delete("/u/:username");

router.post("/bulk");
router.get("/draw");
router.post("/");
router.get("/");

module.exports = router;
