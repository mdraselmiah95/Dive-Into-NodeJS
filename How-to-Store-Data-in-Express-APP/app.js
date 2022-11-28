const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server is Running 🚤");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
