const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mongoose Schema

const { Schema } = mongoose;
let testSchema = new Schema({
  name: String,
});

let Test = mongoose.model("Test", testSchema);

app.get("/", (req, res) => {
  let test = new Test({
    name: "Tom hank",
  });
  test
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "Error Occurred",
      });
    });
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
