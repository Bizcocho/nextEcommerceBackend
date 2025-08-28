const router = require("express").Router();
const data = require("../data/options.json");
router.get("/", (req, res) => {
  res.send(data);
});

module.exports = router;
