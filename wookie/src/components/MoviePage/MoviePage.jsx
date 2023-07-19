import React from "react";
import NavBar from "../NavBar/NavBar";
import MovieDetail from "../MovieDetail/MovieDetail";
import { useParams } from "react-router-dom";

function MoviePage() {
  const { movieId } = useParams();
  return (
    <div>
      <NavBar />
      <MovieDetail id={movieId} />
    </div>
  );
}

export default MoviePage;
