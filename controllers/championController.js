const express = require("express");
const Champions = require("../models/champions");
const router = express.Router();


//list all champs
router.get("/", (req, res) => {
  Champions.find({})
    .then((champs) => res.render("champions/champIndex", { data: champs }))
    .catch(console.error);
});

//render new
router.get("/new", (req, res) => {
  res.render("champions/new");
});

//add champ
router.post("/add", (req, res) => {
  Champions.create(req.body)
    .then((champ) => res.redirect("/champions"))
    .catch(console.error);
});

//delete champ
router.delete("/:id", (req, res) => {
  Champions.findOneAndRemove({ _id: req.params.id })
    .then((champ) => res.redirect("/champions"))
    .catch(console.error);
});

//edit champ
router.put("/:id", (req, res) => {
  Champions.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((champ) => res.redirect("/champions"))
    .catch(console.error);
});

//edit specific champ
router.get("/edit/:id", (req, res) => {
  Champions.findById(req.params.id)
    .then((champ) => {
      res.render("champions/edit", champ);
    })
    .catch(console.error);
});

router.get("/:id", (req, res) => {
  Champions.findById(req.params.id)
    .then((champ) => {
        res.render("champions/champDetails", { champ : champ });
    })
    .catch(console.error);
});

module.exports = router;
