const router = require("express").Router();

const { getAllContact, getSingleContact } = require("./contactController");

router.get("/", getAllContact);

router.get("/:contId", getSingleContact);

module.exports = router;
