require('dotenv').config();
const express = require("express");
const methodOverride = require('method-override')
const ejs = require('ejs')
const app = express();
const indexController = require('./controllers/index')
const championController = require('./controllers/championController')
const itemsController = require("./controllers/itemController")
const traitsController = require("./controllers/traitController");
const expressLayouts = require('express-ejs-layouts');

// app.set('view engine', 'hbs')
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/', indexController);
app.use('/champions', championController);
app.use('/items', itemsController);
app.use('/traits',traitsController);


const PORT = process.env.PORT || 4022;

app.listen(PORT, () => {
  console.log(`Now live on ${PORT}`);
});
