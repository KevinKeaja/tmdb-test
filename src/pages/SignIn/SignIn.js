import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

import style from "./SignIn.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_KEY = "18fa1475541ce35d0d7fbe7b5f1281c7";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhMTQ3NTU0MWNlMzVkMGQ3ZmJlN2I1ZjEyODFjNyIsInN1YiI6IjY0YzBjYzZmNjA2MjBhMDEwMTY0NzE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Him1kxh_qQSnrIMwuffDzjDeDZiTl7JktDbY9VtSGYc";
const SignIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) setValidated(true);
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/authentication/token/new",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          params: {
            api_key: API_KEY,
          },
        }
      );

      console.log(response.data);

      const requestToken = response.data.request_token;

      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhMTQ3NTU0MWNlMzVkMGQ3ZmJlN2I1ZjEyODFjNyIsInN1YiI6IjY0YzBjYzZmNjA2MjBhMDEwMTY0NzE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Him1kxh_qQSnrIMwuffDzjDeDZiTl7JktDbY9VtSGYc'
        },
        body: JSON.stringify({
          username: user,
          password: password,
          request_token: requestToken
        })
      };
      
          const verification = await fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login', options);
          const verifiedData = await verification.json();
          console.log(verifiedData); 
      
          const validateLoginResponse = verifiedData;
console.log(validateLoginResponse.request_token);


      const newSession = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhMTQ3NTU0MWNlMzVkMGQ3ZmJlN2I1ZjEyODFjNyIsInN1YiI6IjY0YzBjYzZmNjA2MjBhMDEwMTY0NzE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Him1kxh_qQSnrIMwuffDzjDeDZiTl7JktDbY9VtSGYc'

        },
        body: JSON.stringify({
          api_key: API_KEY,
          request_token: validateLoginResponse.request_token,
        }),
      };
      const session = await fetch('https://api.themoviedb.org/3/authentication/session/new', newSession);
      const datas = await session.json();
      console.log(datas);
  
datas.session_id
      const accessToken = datas.session_id;
      localStorage.setItem("access_token", accessToken);
      const success = datas.success
if(success ===true){

  toast.success('Login successful!', {
    position: 'top-right',
    autoClose: 3000, 
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  navigate("/movies");
}else {
  window.alert("ERROR IN SIGNING ")
}
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container>
      <div className={style.body}>
        <div className={style.signin_box}>
          <p className={style.signin_p1}>Sign in</p>
          <p className={style.signin_p2}>Sign in to your self service portal</p>
          <br />
          <div className={style.input_box}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="valdidation1">
                    <Form.Control
                      required
                      placeholder="Username"
                      className={style.input}
                      type="text"
                      onChange={handleUserChange}
                      value={user}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group md={6} controlId="validation2">
                    <Form.Control
                      required
                      className={style.input}
                      type="password"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      value={password}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <Button type="submit" className={style.button}>
                    <p>LOGIN</p>
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
