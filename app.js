import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
import categories from "./routes/categories";
import products from "./routes/products";
import brands from "./routes/brands";
import options from "./routes/options";
import checkout from "./routes/checkout";

app.use(json());
app.use(cors());

app.use(urlencoded({ extended: false }));

app.use("/categories", categories);
app.use("/products", products);
app.use("/brands", brands);
app.use("/options", options);
app.use("/checkout", checkout);

app.get("/", (req, res) => {
  res.send("server is running 🚀");
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

export default app;
