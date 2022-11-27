const router = require("express").Router();

const {
  getAllContact,
  getSingleContact,
  createNewContact,
  updateContact,
  deleteContact,
} = require("./contactController");

router.get("/", getAllContact);

router.get("/:contId", getSingleContact);

router.post("/", createNewContact);

router.put("/:contId", updateContact);

router.delete("/:contId", deleteContact);

module.exports = router;
