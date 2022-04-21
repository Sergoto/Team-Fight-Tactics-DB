const Champions = require("../models/champions");
const Items = require("../models/items");
const Traits = require("../models/traits")
const ChampionsData = require("../db/champions.json");
const ItemData = require("../db/items.json");
const TraitsData = require("../db/traits.json")


Champions.deleteMany({}).then(() => {
  Champions.insertMany(ChampionsData)
    .then(console.log)
    .catch(console.error)
    .finally(() => {
      process.exit();
    });
});

Items.deleteMany({}).then(() => {
    Items.insertMany(ItemData)
        .then(console.log)
        .catch(console.error)
        .finally(() => {
            process.exit();
    })
})

Traits.deleteMany({}).then(() => {
    Traits.insertMany(TraitsData)
        .then(console.log)
        .catch(console.error)
        .finally(() => {
            process.exit();
    })
})