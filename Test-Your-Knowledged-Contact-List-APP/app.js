const express = require("express");
const morgan = require("morgan");
const contactRoute = require("./contactRoute");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 4040;

app.use("/contacts", contactRoute);

app.get("/", (req, res) => {
  res.send("Server is Running 🏄‍♂️");
});

app.get("*", (req, res) => {
  res.send(`<h2>Please Use The Correct Route 🚑</h2>`);
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});

// Route
// Controller

// Contact

//7.7
