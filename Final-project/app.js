const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
mongoose.set("strictQuery", false);

// TODO: Import Route
const authRoutes = require("./routes/authRoute");

// TODO: Playground Route

const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dkgxs.mongodb.net/?retryWrites=true&w=majority`;

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

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
  session({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    resave: false,
    saveUninitialized: false,
  }),
];

app.use(middleware);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("DATABASE CONNECTED...");
    app.listen(PORT, () => {
      console.log(`App is Running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    return console.log(error);
  });

// ! video => 15.2

//the
