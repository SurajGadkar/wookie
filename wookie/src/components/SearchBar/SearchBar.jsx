import React from "react";
import Box from "@mui/material/Box";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <Box>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter keywords here"
      />
      <>search icon</>
    </Box>
  );
}

export default SearchBar;
