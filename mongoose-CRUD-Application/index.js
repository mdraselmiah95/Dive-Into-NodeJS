const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const todoHandler = require("./routes/todoHandler");

// TODO: express application initialization

const app = express();
app.use(express.json());

//TODO: database connection with mongoose
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("CONNECTION SUCCESSFUL"))
  .catch((err) => console.log(err));

//TODO: application routes
app.use("/todo", todoHandler);

app.get("/", (req, res) => {
  res.send("hello");
});

//TODO: default error handler
function errorHandler(err, req, res, next) {
  if (res.headerSend) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`APP IS LISTENING AT POST ${PORT}`);
});
