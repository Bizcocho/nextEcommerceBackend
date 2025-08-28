const express = require("express");
const app = express();
const cors = require("cors");
const categories = require("./routes/categories");
const products = require("./routes/products");
const brands = require("./routes/brands");
const options = require("./routes/options");
const checkout = require("./routes/checkout");

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use("/categories", categories);
app.use("/products", products);
app.use("/brands", brands);
app.use("/options", options);
app.use("/checkout", checkout);

app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/", (req, res) => {
  res.send("server is running 🚀");
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

module.exports = app;
