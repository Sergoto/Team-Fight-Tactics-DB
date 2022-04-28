const mongoose = require('../db/connection')


const ItemsSchema = new mongoose.Schema({
    name: String,
    img: String,
    effect: String,
    isUnique: Boolean,
    isArtifact: Boolean
});

const Items = mongoose.model("Items", ItemsSchema)

module.exports = Items