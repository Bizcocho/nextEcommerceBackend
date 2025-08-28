const router = require("express").Router();
const data = require("../data/products.json");
router.get("/", (req, res) => {
  const sortedData = data.sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );
  res.send(sortedData);
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;

  const productData = data.find((product) => product.id === productId);

  if (productData) return res.send(productData);

  return res.send("404 Not Found").status(404);
});

module.exports = router;
