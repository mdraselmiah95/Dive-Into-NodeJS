const fs = require("fs");
const express = require("express");
// const index = fs.readdirSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const app = express();
const PORT = 3000;

// bodyParser
app.use(express.json());
// app.use(express.urlencoded());
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get("User-Agent")
  );
  next();
});

const auth = (req, res, next) => {
  console.log(req.query);
  if (req.query.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
  next();
};

// API - Endpoint - Route

app.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});
//Rop
app.post("/", (req, res) => {
  res.json({ type: "POST" });
});

app.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

app.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

app.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

app.get("/demo", (req, res) => {
  // res.sendStatus(404)
  //   res.json(products);
  //   res.send("Hello world");
  res.status(200).send("Hello World");
  //   res.sendFile("");
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
