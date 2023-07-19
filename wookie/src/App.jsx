import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MoviePage from "./components/MoviePage/MoviePage";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/movies/:movieId" element={<MoviePage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
    </Routes>
  );
}

export default App;
