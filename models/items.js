const mongoose = require('../db/connection')


const ItemsSchema = new mongoose.Schema({
    name: String,
    img: String,
    effect: String,
    isUnique: Boolean,
    isComponent: Boolean
});

const Items = mongoose.model("Items", ItemsSchema)

module.exports = Items