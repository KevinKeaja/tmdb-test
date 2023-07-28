// MovieList.js
import React, { useEffect, useState } from "react";
import Movie from "./movie.js";
import style from "./Movies.module.css";
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=18fa1475541ce35d0d7fbe7b5f1281c7";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const tokenVal = localStorage.getItem("access_token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenVal) {
      navigate("/");
    }
  }, [tokenVal]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className={style.movie_list}>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MoviesList;
