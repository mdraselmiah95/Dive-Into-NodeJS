const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const router = require("./routes");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contacts", router);

app.get("/", (req, res) => {
  res.send("");
});

const PORT = process.env.PORT || 4040;
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dkgxs.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is Running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
