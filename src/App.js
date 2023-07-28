import React from "react";
import NavBar from "./NavBar/NavBar";
import SignIn from "./pages/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/moviecard/Movies";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={[<NavBar />, <ToastContainer />, <SignIn />]}
        />
        <Route
          path="/movies"
          element={[<NavBar />, <ToastContainer />, <Movies />]}
        />
        <Route
          path="/moviedetail/:movieId"
          element={[<NavBar />, <MovieDetail />]}
        />
      </Routes>
    </div>
  );
};

export default App;
