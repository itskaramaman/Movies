const express = require("express");
const routes = express.Router();

const { getMovies, postMovie } = require("../controller/Movie");

routes.route("/").get(getMovies).post(postMovie);

module.exports = routes;
