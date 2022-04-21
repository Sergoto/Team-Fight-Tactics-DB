const express = require("express");

const Items = require("../models/items");
const router = express.Router();

router.get("/items", (req, res) => {
  Items.find({})
    .then((item) => {
      res.send(item);
    })
    .catch(console.error);
});

module.exports = router;
