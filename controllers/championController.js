const express = require("express");
const Champions = require("../models/champions");
const router = express.Router();

//list all champs
router.get("/", (req, res) => {
  Champions.find({}).then((champs) =>
    res.render("champions/champIndex", { stuff: champs })
  );
});

//render new
router.get("/new", (req, res) => {
  res.render("champions/new");
});

//add champ
router.post("/add", (req, res) => {
  Champions.create(req.body).then((champ) => res.redirect("/"));
});

//delete champ
router.delete("/:id", (req, res) => {
  Champions.findOneAndRemove({ _id: req.params.id }).then((champ) =>
    res.redirect('/champions')
  );
});

//edit champ
router.put("/:id", (req, res) => {
  Champions.findOneAndUpdate({ _id: req.params.id }, req.body).then((champ) =>
    res.redirect("/")
  );
});

router.get("/:id", (req, res) => {
  Champions.findById(req.params.id).then((champ) => {
    res.render("champions/edit", champ);
  });
});


module.exports = router;
