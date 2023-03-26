const express = require("express");
require("dotenv").config();
const fs = require("fs");

const app = express();

app.get("/", [
  (res, res, next) => {
    fs.readFile("/file-doesnt-exist", "utf-8", (err, data) => {
      next(err);
    });
  },
  (req, res, next) => {
    console.log(data.property);
  },
]);

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
