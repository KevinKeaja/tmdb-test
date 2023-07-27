import React from "react";
import style from "./MovieDetail.module.css";
import { Col, Row } from "react-bootstrap";

const MovieDetail = () => {
  return (
    <div className={style.detail}>
      <div className={style.left}>
        <h6 className={style.p1}>
          Game of Thrones - Conquest & Rebellion: An Animated History of the
          Seven Kingdoms
        </h6>
        <p className={style.p2}>Rating : 3.92 / 5</p>
        <br/>
        <p className={style.p3}>
          HBO's animated history of Westeros brings to life all the events that
          shaped the Seven Kingdoms in the thousands of years before Game of
          Thrones' story begins.
        </p>
        <h6 className={style.p4}>Release Date :2017-12-12</h6>
        <h6 className={style.p5}>Orginal Language en</h6>
      </div>
      <div>
        <iframe
          width="990"
          height="772"
          src="https://www.youtube.com/embed/b9EkMc79ZSU"
          title="Stranger Things | Official Final Trailer | Netflix"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetail;
