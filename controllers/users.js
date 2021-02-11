const express = require("express");
// router will act like app has for us
const router = express.Router();
// bring in db
const db = require("../models");
const axios = require('axios');

//control our routes

// this path is really localhost:8000/users/
router.get("/", (req, res) => {
  db.user.findAll()
  .then ( allUsers => {
      res.render('indexUsers', { allUsers })
  })
  // render a page to show all users;
});

router.post("/", (req, res) => {
    db.user.findOrCreate({
        where: {
            name:req.body.name
        }
    })
    .then( user => {
        console.log(`${user.name} has joined the world of studio ghibli`)
        console.log(user.id)
        res.redirect('/')
    })
})

// router.get('/:id', (req, res)=> { //this page will render the movie pages 
//     db.user.findOne({ 
//     where: {
//         id: req.params.id
//     }, 
//     })
//     .then( user => {
//     res.render('test', { user })
//     })
// })

router.get('/:id', (req, res) => {
    const catUrl = "https://ghibliapi.herokuapp.com/films";
    // Use request to call the API
    axios.get(catUrl).then( function(apiResponse) {
      let films = apiResponse.data;
      console.log(films)
      res.render('indexFilms', {films});
    })
});


router.get('profile/:id/', (req, res)=> { //this page will render the user profile - w/ the favorite and watchlist films
    db.user.findOne({ 
    where: {
        id: req.params.id
    }, 
    })
    .then( user => {
    res.render('test', { user })
    })
})

// export the router to have access to it
module.exports = router;
