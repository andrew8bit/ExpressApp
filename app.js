// 1 - Enviroment
require('dotenv').config();

// 2 - Imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

// add controllers
const controllers = require('./controllers')

// 3 - App set up
const app = express();
app.set( 'view engine', 'ejs');

// 4 - App Middlewhere (app.use)
app.use(express.static(__dirname + '/public/'))
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"));

// 5 - Routes (controllers)
app.get('/', (req, res) => {
  res.redirect('/users');
    });

app.use('/users', controllers.users) //drops into our users controller
// app.use('/films', controllers.films) //drops into our films controller

// ..

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})