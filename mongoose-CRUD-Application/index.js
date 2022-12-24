const express = require("express");

//* express application initialization

const app = express();
app.use(express.json());

//* application routes

//* default error handler
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
