import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  const deleteMovieHandler = async (key) => {
    try {
      const response = await fetch(
        "https://react-http-a080a-default-rtdb.firebaseio.com/movies.json",
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <>
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
          <button onClick={() => deleteMovieHandler(movie.id)}>
            Delete Movie
          </button>
        </>
      ))}
    </ul>
  );
};

export default MovieList;
