const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "This is welcome message" });
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
