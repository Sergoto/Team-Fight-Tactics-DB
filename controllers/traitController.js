const express = require("express");

const Traits = require('../models/traits')
const router = express.Router();

router.get("/traits", (req, res) => {
    Traits.find({})
        .then((trait) => {
            res.send(trait)
        })
        .catch(console.error);
})

module.exports = router;