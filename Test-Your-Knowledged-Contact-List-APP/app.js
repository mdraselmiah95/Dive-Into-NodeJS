const express = require("express");
const contactRoute = require("./contactRoute");

const app = express();
const PORT = process.env.PORT || 4040;

app.use("/contacts", contactRoute);

app.get("/", (req, res) => {
  res.send("Server is Running 🏄‍♂️");
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
