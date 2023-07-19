import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./SearchPage.module.css";
import Card from "../Card/Card";

function SearchPage() {
  const location = useLocation();
  const searchedMovies = location.state;

  return (
    <Box>
      <NavBar />
      <Box className={styles.main_container}>
        <Box>
          <h1>{"Search Results : "}</h1>
        </Box>
        <Box className={styles.movie_container}>
          {searchedMovies.length ? (
            searchedMovies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  id={movie.id}
                  img={movie.backdrop}
                  title={movie.title}
                />
              );
            })
          ) : (
            <h2>Enter the Keywods to Search</h2>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default SearchPage;
