import React, { useEffect } from "react";
import style from "./Movies.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import MoviesList from "./MoviesList";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const tokenVal = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenVal) {
      navigate("/");
    }
  }, [tokenVal]);
  return (
    <Container>
      <div>
        <div className={style.movie_banner}>
          <Row>
            <Col>
              <p className={style.p1}>Welcome to Our movie site</p>
            </Col>
            <Col>
              <p className={style.p2}>
                Our special <span className={style.red}>Movies</span>
              </p>
            </Col>
            <Col>
              <p className={style.p3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industrioy. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown.
              </p>
            </Col>
            <Col className={style.buttonc}>
              <Button className={style.button}>
                <p>Read More</p>
              </Button>
            </Col>
          </Row>
        </div>
        <Col></Col>
        <div className={style.card}>
          <MoviesList />
        </div>
      </div>
    </Container>
  );
};

export default Movies;
