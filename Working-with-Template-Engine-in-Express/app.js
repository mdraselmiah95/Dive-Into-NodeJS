const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});

/*
<%= EJS %>
Embedded JavaScript templating.
*/
