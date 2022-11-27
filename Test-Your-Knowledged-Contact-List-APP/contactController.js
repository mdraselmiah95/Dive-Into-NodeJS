const contacts = require("./Contacts");

exports.getAllContact = (req, res) => {
  res.json(contacts.getAllContacts());
};

exports.createNewContact = (req, res) => {
  let { name, phone, email } = req.body;
  let contact = contacts.createContact({
    name,
    phone,
    email,
  });

  res.json(contact);
};

// exports.getSingleContact = (req, res) => {
//   res.send("I am Contact" + req.params.id);
// };

// exports.updateContact = (req, res) => {
//   res.send("Update Your Existing Contact 🚧" + req.params.id);
// };

// exports.deleteContact = (req, res) => {
//   res.send("Delete Your Existing Contact 🏚️" + req.params.id);
// };
