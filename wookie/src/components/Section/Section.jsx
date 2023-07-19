import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import Box from "@mui/material/Box";
import Card from "../Card/Card";
import { getMovieList } from "../api/apiCalls";

function Section() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Hardcoding this because of time issue, Never do it in production code.
    getMovieList("Wookie2019").then((data) => setMovieList(data.movies));
  }, []);


  return (
    <Box className={styles.main_container}>
      <Box>
        <h3>GENRE</h3>
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
