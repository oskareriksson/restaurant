const router = require("express").Router();

//Index route
router.get("/", (req, res) => {
  res.render("index", {
    title: "Restaurant - A table reservation service"
  });
});

module.exports = router;