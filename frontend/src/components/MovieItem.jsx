import classes from "./MovieItem.module.css";
import { Card } from "react-bootstrap";
import { useState } from "react";

const MovieItem = (props) => {
  const [favourite, setFavourite] = useState(false);

  const addToFavoriteHandler = async (movie) => {
    await fetch("http://localhost:5000/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    setFavourite(true);
  };

  return (
    <Card className={classes.card}>
      <Card.Img
        className={classes.cardimg}
        variant="top"
        src={"https://image.tmdb.org/t/p/w300" + props.movie.poster_path}
      />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>
          <i>Release Date: {props.movie.release_date}</i>
        </Card.Text>
        <button onClick={() => addToFavoriteHandler(props.movie)}>
          {favourite ? "Favourited" : "Add To Favourite"}
        </button>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
