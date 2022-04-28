const mongoose = require('../db/connection')

const ChampionSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    origins: [String],
    classes: [String],
    img: String,
});

const Champions = mongoose.model("Champions", ChampionSchema)

module.exports = Champions