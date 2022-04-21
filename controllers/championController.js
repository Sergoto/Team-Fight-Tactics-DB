const express = require("express");

const Champions = require('../models/champions')
const router = express.Router();

router.get("/champions", (req, res) => {
    Champions.find({})
        .then((champ) => {
            res.send(champ);
        })
        .catch(console.error);
})


module.exports = router;