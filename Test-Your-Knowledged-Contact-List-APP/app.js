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

//7.6

// This is the contact list app with some here are many feature and already exist in this app the the go went to the maun game then  top of the you you top you done this will help me lot
