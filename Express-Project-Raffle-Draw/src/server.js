const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use([morgan("dev"), cors(), express.json()]);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});

app.use((req, res, next) => {
  const error = new Error("Response not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  res.status(500).json({ message: "Something went wrong 💥" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is Listening on PORT`, port);
});

//TODO: {npm/yarn run dev} to run nodemon server & to run node sever npm/yarn start
