import axios from "axios";
const BACKEND_URL = "https://wookie.codesubmit.io";

export const getMovieDetailsById = async (movieId, token) => {
  try {
    // Get a list of all movies
    let response = await getMovieList(token);
    response = response.movies;

    const movie = response.filter((m) => m.id === movieId);
    return movie;

    // Filter movies by passing movieId
  } catch (err) {
    console.log(err);
  }
};

export const getMovieList = async (token) => {
  // Api Call to fetch movie list from url
  try {
    const moviesList = await axios.get(`${BACKEND_URL}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return moviesList.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieByGenre = async (genre) => {
  try {
    let response = await getMovieList("Wookie2019");
    response = response.movies;

    const moviesByGenre = response.filter((movie) => {
      return movie.genres.includes(genre);
    });
    return moviesByGenre;
  } catch (err) {
    console.log(err);
  }
};


export const getAllGenres = (movieList) => {
  let uniqueGenre = new Set();
  movieList.forEach((movie) => {
    movie.genres.forEach((genre) => {
      uniqueGenre.add(genre);
    });
  });
  const result = Array.from(uniqueGenre);
  return result;
};

/* Search function */

export const search = (movieList, str) => {
  const result = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(str.toLowerCase())
  );

  return result;
};
