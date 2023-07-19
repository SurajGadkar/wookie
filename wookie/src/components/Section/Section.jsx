import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import Box from "@mui/material/Box";
import Card from "../Card/Card";
import { getMovieList, getMovieByGenre } from "../api/apiCalls";

function Section({ genre, movies }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (genre === "Search Results :") {
      setMovieList(movies);
    } else {
      const moviesByGenre = getMovieByGenre(genre);
      moviesByGenre.then((data) => setMovieList(data));
    }
  }, []);

  return (
    <Box className={styles.main_container}>
      <Box>
        <h3 className={styles.genre__title}>{genre.toUpperCase()}</h3>
      </Box>
      <Box className={styles.movie_container}>
        {movieList.map((movie) => {
          return (
            <Card
              key={movie.id}
              id={movie.id}
              img={movie.backdrop}
              title={movie.title}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default Section;
