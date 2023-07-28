import React from "react";
import style from "./NavBar.module.css";
import { Col, Container, Row } from "react-bootstrap";
import ticket from "./ticket.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <Container >
      <div className={style.navbar}>
        <Row>
          <Col>
            <img className={style.ticket} src={ticket} />
          </Col>
          <Col className={style.right}>
            {localStorage.getItem("access_token") !== null && (
            <Link className={style.logout}>
              <h5 onClick={logout}>Logout</h5>
            </Link>
            )} 
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default NavBar;
