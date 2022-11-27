const contacts = require("./Contacts");

exports.getAllContact = (req, res) => {
  res.json(contacts.getAllContacts());
};

// exports.getSingleContact = (req, res) => {
//   res.send("I am Contact" + req.params.id);
// };

// exports.createNewContact = (req, res) => {
//   res.send("Create New Contact 🖱️");
// };

// exports.updateContact = (req, res) => {
//   res.send("Update Your Existing Contact 🚧" + req.params.id);
// };

// exports.deleteContact = (req, res) => {
//   res.send("Delete Your Existing Contact 🏚️" + req.params.id);
// };
