const express = require("express");

const app = express();
const PORT = process.env.PORT || 4040;

app.get("/", (req, res) => {
  res.send("Server is Running 🏃");
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
