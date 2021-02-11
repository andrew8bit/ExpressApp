const express = require("express");
// router will act like app has for us
const router = express.Router();
// bring in db
const db = require("../models");
// const axios = require('axios');

// router.get('/', (req, res) => {
//     const catUrl = "https://ghibliapi.herokuapp.com/films";
//     // Use request to call the API
//     axios.get(catUrl).then( function(apiResponse) {
//       let films = apiResponse.data;
//       console.log(films)
//       res.render('indexFilms', {films});
//     })
// });