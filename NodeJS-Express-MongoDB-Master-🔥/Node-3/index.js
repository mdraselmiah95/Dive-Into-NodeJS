const fs = require("fs");
const express = require("express");
const index = fs.readdirSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const app = express();
