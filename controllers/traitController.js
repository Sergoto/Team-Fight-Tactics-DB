const express = require("express");

const Traits = require('../models/traits')
const router = express.Router();

//find all traits
router.get("/traits", (req, res) => {
    Traits.find({})
        .then((trait) => {
            res.send(trait)
        })
        .catch(console.error);
});

//find trait by id
router.get("/traits/:id", (req, res) => {
  Traits.findById(req.params.id)
    .then((trait) => {
      res.send(trait);
    })
    .catch(console.error);
});

//create traits
router.post("/traits", (req, res) => {
  Traits.create(req.body)
    .then((trait) => res.redirect("/traits"))
    .catch(console.error);
});

//delete traits by id
router.delete("/traits/:id", (req, res) => {
  Traits.findOneAndRemove({ _id: req.params.id })
    .then((trait) => res.redirect("/traits"))
    .catch(console.error);
});

//update traits by id
router.put("/traits/:id", (req, res) => {
  Traits.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((trait) => res.redirect("/traits"))
    .catch(console.error);
});

module.exports = router;