const express = require("express");

const Champions = require("../models/champions");
const router = express.Router();

//list champs
router.get("/champions", (req, res) => {
  Champions.find({})
    .then((champ) => {
      res.send(champ);
    })
    .catch(console.error);
});

//find champ by id
router.get("/champions/:id", (req, res) => {
  Champions.findById(req.params.id)
    .then((champ) => {
      res.send(champ);
    })
    .catch(console.error);
});

//create a champ
router.post("/champions", (req, res) => {
  Champions.create(req.body)
    .then((champ) => res.redirect("/champions"))
    .catch(console.error);
});

//delete champ by id
router.delete("/champions/:id", (req, res) => {
  Champions.findOneAndRemove({ _id: req.params.id })
    .then((champ) => res.redirect("/champions"))
    .catch(console.error);
});

//update champ by id
router.put("/champions/:id", (req, res) => {
  Champions.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((champ) => res.redirect("/champions"))
    .catch(console.error);
});

module.exports = router;
