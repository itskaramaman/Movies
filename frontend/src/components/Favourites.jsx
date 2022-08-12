import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import classes from "./Favourites.module.css";

import { Container } from "react-bootstrap";

const Favourites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <h2>Your Favourites List</h2>
      <div className={classes.movies}>
        {movies.map((movie) => (
          <MovieItem key={movie._id} movie={movie} />
        ))}
      </div>
    </Container>
  );
};

export default Favourites;
