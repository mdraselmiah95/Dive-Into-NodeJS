const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const todoHandler = require("./routes/todoHandler");

// TODO: express application initialization
const app = express();
app.use(express.json());

//TODO: database connection with mongoose
mongoose
  .connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world");
});

//TODO: application routes
app.use("/todo", todoHandler);

//TODO: default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => {
  console.log("app listening at port 3000");
});
