import React from "react";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import SearchBar from "../SearchBar/SearchBar";
import { Box } from "@mui/material";
import CustomButton from "../Button/Button";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <Box className={styles.nav_container}>
      {/* Logo*/}
      <Logo />

      {/* NavLinks*/}
      <NavLinks />

      {/* SearchBar*/}
      <SearchBar />

      {/* Login Button */}
      <CustomButton text={"LOGIN"} />
    </Box>
  );
}

export default NavBar;
