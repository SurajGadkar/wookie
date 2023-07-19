import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import styles from "./SearchBar.module.css";
import { search, getMovieList } from "../api/apiCalls";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [movielist, setMovielist] = useState([]);

  useEffect(() => {
    const response = getMovieList("Wookie2019");
    response.then((data) => setMovielist(data.movies));
  }, []);

  const handleChange = (event) => {
    
    if (event.target.id === "search") {
      setInput(event.target.value);
    }
  };

  const handleSearch = async (event) => {
    const searchResult = search(movielist, input);
    console.log(searchResult);
    navigate("/search", { state: searchResult });
  };

  return (
    <Box>
      <input
        onChange={handleChange}
        id="search"
        className={styles.input}
        type="text"
        placeholder="Enter keywords here"
      />
      <button className="btn" onClick={handleSearch}>
        search icon
      </button>
    </Box>
  );
}

export default SearchBar;
