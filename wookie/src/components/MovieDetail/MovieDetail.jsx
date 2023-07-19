import React, { useState, useEffect } from "react";
import styles from "./MovieDetail.module.css";
import { getMovieDetailsById } from "../api/apiCalls";


function MovieDetail(id) {
    const [movie, setMovie] = useState({});

    useEffect( () => {
        // Get movie
        const movieObj = getMovieDetailsById(id);
        movieObj
        .then( (data) => setMovie(data))
    }, [])
    
  return <div>MovieDetail</div>;
}

export default MovieDetail;
