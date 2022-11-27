exports.getAllContact = (req, res) => {
  res.send("Render All Contacts 🧮");
};

exports.getSingleContact = (req, res) => {
  res.send("I am Contact" + req.params.contId);
};

exports.createNewContact = (req, res) => {
  res.send("Create New Contact 🖱️");
};

exports.updateContact = (req, res) => {
  res.send("Update Your Existing Contact 🚧" + req.params.contId);
};

exports.deleteContact = (req, res) => {
  res.send("Delete Your Existing Contact 🏚️" + req.params.contId);
};
