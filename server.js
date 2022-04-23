require('dotenv').config();
const express = require("express");
const app = express();
const championController = require('./controllers/championController')
const itemsController = require("./controllers/itemController")
const traitsController = require("./controllers/traitController")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(championController);
app.use(itemsController);
app.use(traitsController);

const PORT = process.env.PORT || 4022;

app.listen(PORT, () => {
  console.log(`Now live on ${PORT}`);
});
