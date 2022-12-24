const router = require("express").Router();

//TODO: GET ALL THE TODOS
router.get("/", async (req, res) => {});

//TODO: GET A TODO BY ID
router.get("/;id", async (req, res) => {});

//TODO: POST TODO
router.post("/", async (req, res) => {});

//TODO: POST MULTIPLE TODO
router.get("/all", async (req, res) => {});

//TODO: PUT TODO
router.put("/:id", async (req, res) => {});

//TODO: DELETE TODO ID
router.delete("/:id", async (req, res) => {});

module.exports = router;
