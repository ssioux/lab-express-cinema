require("dotenv/config");

//1. data a agregar
const cinemaArr = require("./cinema.seed.json");
//2. conectar a la base de datos
require("../db");
//2.5 modelo requerido
const Movie = require("../models/Movie.model");

//3. agregar data a la data base
Movie.insertMany(cinemaArr)
  .then(() => {
    console.log("movies Added!");
  })
  .catch((error) => {
    console.log(error);
  });
