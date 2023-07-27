import React from 'react'
import style from "./NavBar.module.css";
import { Container } from 'react-bootstrap';
import ticket from "./ticket.png"
const NavBar = () => {
  return (
    <Container>

    <div className={style.navbar}>
        <img className={style.ticket} src={ticket}/>
    </div>
    </Container>
  )
}

export default NavBar