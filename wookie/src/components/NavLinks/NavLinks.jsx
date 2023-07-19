import React from "react";
import styles from "./NavLink.module.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <Box>
      <ul className={styles.link_container}>
        <Link to="/" className={styles.link_hover}>
          <li className={styles.light_font} href="#" underline="none">
            Home
          </li>
        </Link>
        <Link to="/" className={styles.link_hover}>
          <li className={styles.light_font} href="#" underline="none">
            Genre
          </li>
        </Link>
        <Link className={styles.link_hover}>
          <li to="/" className={styles.light_font} href="#" underline="none">
            Comedy
          </li>
        </Link>
        <Link className={styles.link_hover}>
          <li to="/" className={styles.light_font} href="#" underline="none">
            Action
          </li>
        </Link>
        <Link className={styles.link_hover}>
          <li to="/" className={styles.light_font} href="#" underline="none">
            Romance
          </li>
        </Link>
        <Link className={styles.link_hover}>
          <li to="/" className={styles.light_font} href="#" underline="none">
            TopIMDB
          </li>
        </Link>
      </ul>
    </Box>
  );
}

export default NavLinks;
