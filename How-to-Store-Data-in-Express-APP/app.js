const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const router = require("./routes");

const app = express();

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
    `mongodb+srv://rasel_new:1234567890@cluster0.dkgxs.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is Running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Video => 9.13  the top of the game of throne yae we you are the for the happy the coders trust food blogger nice and cooler the night machine nice the top of the side of
