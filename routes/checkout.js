const router = require("express").Router();

router.post("/", (req, res) => {
  setTimeout(() => {
    const random = Math.random();
    if (random < 0.2) return res.send("checkout failed").status(400);
    return res.send("success");
  }, 2000);
});

module.exports = router;
