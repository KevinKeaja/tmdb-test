import React from "react";
import style from "./MovieDetail.module.css";
import { Col, Row } from "react-bootstrap";

const MovieDetail4 = () => {
  return (
    <div className={style.detail}>
      <div className={style.left}>
        <h6 className={style.p1}>
          Dark Season-3 -Jonas emerges from the cave into a different but not
          unfamiliar world: The town of Winden reeling from the recent
          disappearance of a young boy
        </h6>
        <p className={style.p2}>Rating : 4 / 5</p>
        <br />
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
          src="https://www.youtube.com/embed/cq2iTHoLrt0"
          title="Dark Season 3 | Official Trailer | Netflix"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetail4;
