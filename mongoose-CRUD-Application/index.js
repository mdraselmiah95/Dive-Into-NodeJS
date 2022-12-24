const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
const todoHandler = require("./routes/todoHandler");

// TODO: express application initialization
const middleware = [express.urlencoded({ extended: true }), express.json()];
const app = express(middleware);

//TODO: database connection with mongoose
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dkgxs.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("DATABASE CONNECTED...");
    app.listen(PORT, () => {
      console.log(`App is Running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    return console.log(error);
  });

//TODO: application routes
app.use("/todo", todoHandler);

app.get("/", (req, res) => {
  res.send("hello world");
});

//TODO: default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

// app.listen(3000, () => {
//   console.log("app listening at port 3000");
// });
