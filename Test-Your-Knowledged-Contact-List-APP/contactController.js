exports.getAllContact = (req, res) => {
  res.send("Render All Contacts 🧮");
};

exports.getSingleContact = (req, res) => {
  res.send("I am Contact" + req.params.contId);
};
