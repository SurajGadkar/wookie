import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Section from "../Section/Section";
import { getMovieList, getMovieByGenre, getAllGenres } from "../api/apiCalls";

function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Hardcoding this because of time issue, Never do it in production code.
    getMovieList("Wookie2019").then((data) => setMovieList(data.movies));
  }, []);

  useEffect(() => {
    // Get all genres
    const allGenres = getAllGenres(movieList);
    setGenres(allGenres);
  }, [movieList]);

  return (
    <div>
      <NavBar />
      {genres.map((genre, id) => {
        return <Section key={id} genre={genre} />;
      })}
    </div>
  );
}

export default HomePage;
