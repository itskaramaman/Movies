const asyncHandler = require("express-async-handler");
const Movie = require("../models/Movie");

const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  if (movies) {
    res.status(200).json(movies);
  } else {
    res.status(500).send("Could not get favourite movies");
  }
});

const postMovie = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { title, poster_path, release_date } = req.body;

  const movie = await Movie.create({
    title,
    poster_path,
    release_date,
  });

  if (movie) {
    res.status(201).json({
      id: movie._id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
    });
  } else {
    res.status(500);
    throw new Error("Invalid user data");
  }
});

module.exports = { getMovies, postMovie };
