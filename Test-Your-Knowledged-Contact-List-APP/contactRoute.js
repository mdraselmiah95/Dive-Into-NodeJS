const router = require("express").Router();

const {
  getAllContact,
  createNewContact,
  getContactsById,
  updateContact,
  deleteContact,
} = require("./contactController");

router.get("/", getAllContact);

router.post("/", createNewContact);

router.get("/:id", getContactsById);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;
