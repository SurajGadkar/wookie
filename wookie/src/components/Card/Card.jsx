import React from "react";
import { Box } from "@mui/material";
import styles from "./Card.module.css";

function Card({ id, img, title }) {
  return (
    <Box className={styles.card_container}>
      <img className={styles.img} src={img} alt={title} />
      <p className={styles.card_title}>
        {title.length > 22 ? title.slice(0, 22) + "..." : title}
      </p>
    </Box>
  );
}

export default Card;
