const express = require("express");
const morgan = require("morgan");

// TODO: Import Route
const authRoutes = require("./routes/authRoute");

const app = express();

// TODO: Setup View Engine
app.set("view engine", "ejs");
app.set("views", "views");

// TODO: middleware
const middleware = [
  morgan("dev"),
  express.static("public"),
  express.urlencoded({ extended: true }),
  express.json(),
];

app.use(middleware);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});

// ! video => 13.3
