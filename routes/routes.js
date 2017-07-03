const router = require("express").Router();

//Index route
router.get("/", (req, res) => {
  res.render("index", {
    title: "Restaurant - A table reservation service"
  });
});

//Overview route
router.get("/overview", (req, res) => {
  res .render("overview", {
    title: "Table Overview"
  });
});

module.exports = router;