const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// TODO: 404 error handling
app.use((req, res, next) => {
  next("Requested url was not found.");
});

app.use((err, req, res, next) => {
  if (res.headersSend) {
    next("There was a problem");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.send("There was an error.");
    }
  }
});

app.listen(process.env.PORT, () => {
  console.log(`APP IS RUNNING ON PORT ${process.env.PORT}`);
});
