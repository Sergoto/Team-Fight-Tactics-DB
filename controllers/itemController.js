const express = require("express");

const Items = require("../models/items");
const router = express.Router();

router.get("/", (req, res) => {
  Items.find({})
    .then((items) => res.render("items/itemIndex", { data: items }))
    .catch(console.error);
});

//render new
router.get("/new", (req, res) => {
  res.render("items/itemNew").catch(console.error);
});

//add item
router.post("/add", (req, res) => {
  Items.create(req.body)
    .then((item) => res.redirect("/items"))
    .catch(console.error);
});

//delete item
router.delete("/:id", (req, res) => {
  Items.findOneAndRemove({ _id: req.params.id })
    .then((item) => res.redirect("/items"))
    .catch(console.error);
});

//edit
router.put("/:id", (req, res) => {
  Items.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((item) => res.redirect("/items"))
    .catch(console.error);
});

router.get("/:id", (req, res) => {
  Items.findById(req.params.id)
    .then((item) => {
      res.render("items/itemEdit", item);
    })
    .catch(console.error);
});

module.exports = router;
