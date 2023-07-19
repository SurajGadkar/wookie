import axios from "axios";
const BACKEND_URL = "https://wookie.codesubmit.io";

export const getMovieDetailsById = async (movieId, token) => {
  try {
    // Get a list of all movies
    const response = await getMovieList(token);

    response.then((data) => {
      const movie = data.movies.filter((m) => m.id === movieId);
      return movie;
    });

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

export const getMovieByGenre = async (genre, token) => {
  try {
    const response = await getMovieList(token);

    response.then((data) => {
      // Filter movieslist by genre
      const moviesByGenre = data.movies.filter((movie) => {
        return movie.genre.filter((g) => genre.includes(g));
      });
      return moviesByGenre;
    });
    
  } catch (err) {
    console.log(err);
  }
};
