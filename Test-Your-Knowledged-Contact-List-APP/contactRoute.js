const router = require("express").Router();

const {
  getAllContact,
  getSingleContact,
  createNewContact,
  updateContact,
  deleteContact,
} = require("./contactController");

router.get("/", getAllContact);

router.post("/", createNewContact);

router.get("/:id", getSingleContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;
