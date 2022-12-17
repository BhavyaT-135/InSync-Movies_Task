import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar.jsx";
import axios from 'axios'

function App() {
  const [movies, setMovies] = useState([])
  //Getting data from the api using useEffect
  useEffect(() => {
    const getMovies = async () => {
      axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=bbd763e21a6efec872263578b7ca2ed4')
        .then((response) => {
          console.log(response.data.results)
          setMovies(response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getMovies()
  }, [])
  return (
    <Router>
      <TopBar movies={movies} setMovies={setMovies} />
        <Routes>
        <Route exact path="/" element={<Home movies={movies} />} />
        </Routes>
      </Router>
  );
}

export default App;
