const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((response) => {
      console.log(response);
      res.render("movies.hbs", {
        films: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:filmId", (req, res, next) => {
  let { filmId } = req.params;

  Movie.findById(filmId)
    .then((response) => {
    let hours = response.showtimes.toString().replace(/,/g, " | ")  // "g" cambia el primer argumento entre "/" por el segundo.
    
    response.showtimes = hours
            
      console.log(hours);
      
      res.render("movies-details.hbs", {
        details: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
