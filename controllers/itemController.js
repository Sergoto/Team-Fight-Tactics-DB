const express = require("express");

const Items = require("../models/items");
const router = express.Router();

//list items
router.get("/items", (req, res) => {
  Items.find({})
    .then((item) => {
      res.send(item);
    })
    .catch(console.error);
});

//find item by id
router.get("/items/:id", (req, res) => {
  Items.findById(req.params.id)
    .then((item) => {
      res.send(item);
    })
    .catch(console.error);
});

//create an item
router.post("/items", (req, res) => {
  Items.create(req.body)
    .then((item) => res.redirect("/items"))
    .catch(console.error);
});

//delete item by id
router.delete("/items/:id", (req, res) => {
  Items.findOneAndRemove({ _id: req.params.id })
    .then((item) => res.redirect("/items"))
    .catch(console.error);
});

//update item by id
router.put("/items/:id", (req, res) => {
  Items.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((item) => res.redirect("/items"))
    .catch(console.error);
});

module.exports = router;
