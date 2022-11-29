const Contact = require("./Contact");

// Get All Contacts=> 🥈

exports.getAllContact = (req, res) => {
  Contact.find()
    .then((contacts) => {
      // res.json(contacts);
      res.render("index", { contacts, error: {} });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "Error Occurred 💥",
      });
    });
};

// Get Single Contact => 🥉
exports.getSingleContact = (req, res) => {
  let { id } = req.params;
  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "Error Occurred 💥",
      });
    });
};

// Create Contact => 🥇
exports.createContact = (req, res) => {
  let { name, phone, id, email } = req.body;

  let error = {};
  if (!name) {
    error.name = "Please Provide a Name 💥";
  }

  if (!phone) {
    error.phone = "Please Provide a Phone Number 💥";
  }

  if (!email) {
    error.email = "Please Provide a Email 💥";
  }

  let isError = Object.keys(error).length > 0;
  if (isError) {
    Contact.find()
      .then((contacts) => {
        return res.render("index", { contacts, error });
      })
      .catch((error) => {
        console.log(error);
        return res.json({
          message: "Error Occurred 💥",
        });
      });
  }

  let contact = new Contact({
    name,
    email,
    phone,
  });
  contact
    .save()
    .then((contact) => {
      Contact.find().then((contacts) => {
        return res.render("index", { contacts, error: {} });
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        message: "Error Occurred 💥",
      });
    });
};

// Update Contact => 🥉
exports.updateContact = (req, res) => {
  let { name, email, phone } = req.body;
  let { id } = req.params;

  Contact.findOneAndUpdate(
    { _id: id },
    { $set: { name, email, phone } },
    { new: true }
  )
    .then((contact) => {
      res.json(contact);
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "Error Occurred 💥",
      });
    });
};

// Delete Contact => 🥇
exports.deleteContact = (req, res) => {
  let { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then((contact) => {
      res.json(contact);
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "Error Occurred 💥",
      });
    });
};
