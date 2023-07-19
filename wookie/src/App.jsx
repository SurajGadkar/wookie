import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <div>
      <NavBar />
      {/*<Section />*/}
      <MovieDetail/>
    </div>
  );
}

export default App;
