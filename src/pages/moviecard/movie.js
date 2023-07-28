// Movie.js
import { BsFillStarFill } from "react-icons/bs";
import { BiPlayCircle } from "react-icons/bi";
import style from "./Movies.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { Link } from "react-router-dom";
import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Movie = ({ title,vote_average, id, poster_path }) => {
  const rating = vote_average/2;
  const wholeRating = Math.floor(rating);
  console.log("movie", title);
  return (
    <div className={style.movie_card}>
      <img src={API_IMG + poster_path} alt={title} />
      <div className={style.title_box}>
        <div>
          <Row>
            <Col>
              <p>{title}</p>
              <div className={style.star}>
                {[...Array(wholeRating)].map((index) => (
                  <BsFillStarFill id={index + 1} key={index} />
                ))}
              </div>
              <Col className={style.play}>
                <Link to={`/moviedetail/${id}`}>
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
