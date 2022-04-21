const mongoose = require("../db/connection");

const TraitSchema = new mongoose.Schema({
  name: String,
  champions: [String],
  bonus: String,
  set: [
    { count: Number, bonus: String },
    { count: Number, bonus: String },
    { count: Number, bonus: String },
    { count: Number, bonus: String },
  ]
});

const Traits = mongoose.model("Traits", TraitSchema);

module.exports = Traits;
