const express = require("express");

const app = express();
const PORT = process.env.PORT || 4040;

app.get("/", (req, res) => {
  res.send("App is Running 🏆");
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});

//video 4.7 this is the end game top of expressJS
