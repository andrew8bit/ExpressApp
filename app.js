// 1 - Enviroment
require('dotenv').config();

// 2 - Imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

// 3 - App set up
const app = express();
app.set( 'view engine', 'ejs');

// 4 - App Middlewhere (app.use)
app.use(express.static(__dirname + '/public/'))
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false }));
app.use(methodOverride('_method'));

// 5 - Routes (controllers)
app.get('/films', (req, res) => {
    const catUrl = "https://ghibliapi.herokuapp.com/films";
    // Use request to call the API
    axios.get(catUrl).then( function(apiResponse) {
      let films = apiResponse.data;
      console.log(films)
      res.render('index', {films});
    })
});

app.get('/films/:id', (req, res) => {

})

// ..

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})