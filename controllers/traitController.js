const express = require("express");

const Traits = require('../models/traits')
const router = express.Router();



//list all
router.get("/", (req, res) => {
  Traits.find({}).then((trait) =>
    res.render("traits/traitsIndex", { data: trait })
  );
});

//render new
router.get("/new", (req, res) => {
  res.render("traits/traitsNew").catch(console.error);
});

//find trait by id
router.get("/:id", (req, res) => {
  Traits.findById(req.params.id)
    .then((trait) => {
      res.send(trait);
    })
    .catch(console.error);
});

//create traits
router.post("/add", (req, res) => {
  Traits.create(req.body)
    .then((trait) => res.redirect("/traits"))
    .catch(console.error);
});

//delete traits by id
router.delete("/:id", (req, res) => {
  Traits.findOneAndRemove({ _id: req.params.id })
    .then((trait) => res.redirect("/traits"))
    .catch(console.error);
});

//update traits by id
router.put("/:id", (req, res) => {
  Traits.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((trait) => res.redirect("/traits"))
    .catch(console.error);
});

module.exports = router;