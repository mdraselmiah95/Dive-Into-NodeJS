const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "This is a About Page 📃" });
});

app.get("/help", (req, res) => {
  res.render("pages/help", { title: "This is a Help Page 📃" });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "This is a Contact Page 📃" });
});

app.get("/", (req, res) => {
  let post = {
    title: "test title",
    body: "Test body",
    published: true,
  };
  let posts = [
    { title: "Title One", author: "Rasel mia" },
    { title: "Title Two", author: "Rasel mia" },
    { title: "Title Three", author: "Rasel mia" },
    { title: "Title Four", author: "Rasel mia" },
  ];

  res.render("pages/index", {
    title: "EJS is an Awesome Template Engine 🔺",
    post,
    posts,
  });
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});

/*
<%= EJS %>
Embedded JavaScript templating. 
*/

// video=>9.6
