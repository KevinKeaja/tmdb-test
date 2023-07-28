import React, { useState, useEffect } from "react";
import style from "./MovieDetail.module.css";
import {  Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { BiPlayCircle } from "react-icons/bi";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const tokenVal = localStorage.getItem("access_token");
  const API_KEY = "18fa1475541ce35d0d7fbe7b5f1281c7";
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    if (!tokenVal) {
      navigate("/");
    }
  }, [tokenVal]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const trailerKey = movieData?.videos?.results?.[0]?.key;
  const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.detail}>
      <div className={style.left}>
        <br />
        <h6 className={style.p1}>{movieData.original_title}</h6>
        <p className={style.p2}>Rating : {movieData.vote_average} / 10</p>
        <br />
        <p className={style.p3}>{movieData.overview}</p>
        <h6 className={style.p4}>Release Date :{movieData.release_date}</h6>
        <h6 className={style.p5}>
          Orginal Language: {movieData.original_language}
        </h6>
      </div>

      <div>
        <br /><br /><br />
        <div>
          <BiPlayCircle
            className={style.playButton}
            onClick={handleShowModal}
          />
          <img
            className={style.play}
            src={API_IMG + movieData.poster_path}
            alt={movieData.poster_path}
          />
        </div>

        <br />
        <Modal show={showModal} onHide={handleCloseModal}>
          <br />
          <Modal.Body>
            <iframe
              width="560"
              height="315"
              src={trailerUrl}
              title="Movie Trailer"
              allowFullScreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleCloseModal}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MovieDetail;
