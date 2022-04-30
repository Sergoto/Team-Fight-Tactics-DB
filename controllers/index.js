const express = require("express");
const Champions = require("../models/champions");
const router = express.Router();

//landing page
router.get("/", (req, res) => {
  res.render("index");
});



// POST/SEARCH

// router.get("/search", (req, res) => {
//   res.render("search", { title: "TFT - search" });
// });

// Testing a search function... couldn't get it to work.  Gonna circle back
// router.get("/search", async (req, res) => {
//   try {
//     const champions = await Champion.find({ make: req.body.make });
//     const items = await Item.find({ make: req.body.make });
//     const traits = await Trait.find({ make: req.body.make });
//     return res.render("/search", {
//       champions: champions,
//       items: items,
//       traits: traits,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
