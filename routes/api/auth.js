const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({ sucess: true });
});

module.exports = router;
