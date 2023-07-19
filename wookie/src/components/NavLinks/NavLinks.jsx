import React from "react";
import styles from "./NavLink.module.css";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function NavLinks() {
  return (
    <Box className={styles.link_container}>
      <Link className={styles.light_font} href="#" underline="none">
        Home
      </Link>
      <Link className={styles.light_font} href="#" underline="none">
        Genre
      </Link>
      <Link className={styles.light_font} href="#" underline="none">
        Comedy
      </Link>
      <Link className={styles.light_font} href="#" underline="none">
        Action
      </Link>
      <Link className={styles.light_font} href="#" underline="none">
        Romance
      </Link>
      <Link className={styles.light_font} href="#" underline="none">
        TopIMDB
      </Link>
    </Box>
  );
}

export default NavLinks;
