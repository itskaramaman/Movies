import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import { Container } from "react-bootstrap";
import classes from "./AllMovies.module.css";

const AllMovies = () => {
  const MOVIE_URI = process.env.REACT_APP_MOVIE_URI;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URI)
      .then((res) => res.json())
      .then((body) => setMovies(body.results));
  }, []);

  return (
    <Container>
      <h1>Popular Movies</h1>
      <div className={classes.movies}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </Container>
  );
};

export default AllMovies;
