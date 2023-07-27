import React from "react";
import NavBar from "./NavBar/NavBar";
import SignIn from "./pages/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/moviecard/Movies";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import MovieDetail2 from "./pages/movieDetail/Mov2";
import MovieDetail3 from "./pages/movieDetail/mov3";
import MovieDetail4 from "./pages/movieDetail/mov4";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={[<NavBar />, <SignIn />]} />
        <Route path="/movies" element={[<NavBar />, <Movies />]} />
        <Route path="/movie-detail/1" element={[<NavBar />, <MovieDetail />]} />
        <Route
          path="/movie-detail/2"
          element={[<NavBar />, <MovieDetail2 />]}
        />
        <Route
          path="/movie-detail/3"
          element={[<NavBar />, <MovieDetail3 />]}
        />
        <Route
          path="/movie-detail/4"
          element={[<NavBar />, <MovieDetail4 />]}
        />
      </Routes>
    </div>
  );
};

export default App;
