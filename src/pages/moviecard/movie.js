// Movie.js
import { BsFillStarFill } from "react-icons/bs";
import { BiPlayCircle } from "react-icons/bi";
import React from "react";
import style from "./Movies.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  console.log("movie", movie.title);
  return (
    <div className={style.movie_card}>
      <img src={movie.poster} alt={movie.title} />
      <div className={style.title_box}>
        <div>
          <Row>
            <Col>
              <p>{movie.title}</p>
              <div className={style.star}>
                {[...Array(movie.star)].map((index) => (
                  <BsFillStarFill id={index + 1} key={index} />
                ))}
              </div>
              <Col className={style.play}>
                <Link to={`/movie-detail/${movie.id}`}>
                  <BiPlayCircle className={style.playButton} />
                </Link>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Movie;
