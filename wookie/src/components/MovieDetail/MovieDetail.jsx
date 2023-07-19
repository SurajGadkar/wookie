import React, { useState, useEffect } from "react";
import styles from "./MovieDetail.module.css";
import { getMovieDetailsById } from "../api/apiCalls";
import { Box } from "@mui/material";

function MovieDetail({ id }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const movie = getMovieDetailsById(id, "Wookie2019");
    movie.then((data) => {
      setMovie(data[0]);
    });
  }, []);
  return (
    <Box className={styles.main__container}>
      <Box className={styles.path__container}>
        Home / Movies / {movie.title}
      </Box>
      <Box className={styles.details__container}>
        <Box className={styles.image__container}>
          <img
            className={styles.img_style}
            src={movie.poster}
            alt="movie-img"
          />
        </Box>
        <Box className={styles.movie__info__container}>
          <h1>{movie.title}</h1>
          <Box className={styles.flexx}>
            <h5 className={styles.key}>{movie.imdb_rating}</h5>
            <h5 className={styles.key}>{movie.length}</h5>{" "}
          </Box>{" "}
          <Box className={styles.overview}>
            <h4>{movie.overview}</h4>
          </Box>
          <Box className={styles.meta_data}>
            <Box>
              <p>
                Genre:{" "}
                <span className={styles.key}>
                  {movie.genres}
                </span>
              </p>
            </Box>
            <Box>
              <p>
                Cast : <span className={styles.key}>{movie.cast}</span>
              </p>
            </Box>
            <Box>
              <p>
                Director : <span className={styles.key}>{movie.director}</span>{" "}
              </p>
            </Box>
            <Box>
              <p>
                Country : <span className={styles.key}>{movie.country}</span>
              </p>
            </Box>
            <Box>
              <p>
                Release :{" "}
                <span className={styles.key}>{movie.released_on}</span>
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MovieDetail;
