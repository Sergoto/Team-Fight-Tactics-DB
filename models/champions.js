const mongoose = require('../db/connection')

const ChampionSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    origins: [String],
    classes: [String],
    img: String,
    img2: String,
    bio: String,
    ability: [String],
});

ChampionSchema.index({ name: 'text', description: 'text' });

const Champions = mongoose.model("Champions", ChampionSchema)

module.exports = Champions