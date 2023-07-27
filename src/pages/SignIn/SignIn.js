import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

import style from "./SignIn.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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

  const addFormData = {
    user: user,
    password: password,
  };
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) setValidated(true);

    const newContact = {
      user: addFormData.user,
      password: addFormData.password,
    };
    // debugger;
    if (newContact.user === "" || newContact.password === "") {
      console.log("INVALID!!!");
      window.alert("INVALID");
    } else {
      const respons = await axios.post(
        "http://localhost:4000/signin_post",
        newContact
      );
      try {
        const response = await axios.post(
          "http://localhost:4000/signin_post",
          newContact,
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "",
            },
          }
        );

        console.log(response.data);

        if (respons.status === 200) {
          console.log(respons);
          localStorage.setItem("token", respons.data.token);
          navigate("/movies");

          // toast.success("Login successful!", {
          //   position: "top-right",
          //   autoClose: 3000, // The success message will automatically close after 3 seconds
          //   hideProgressBar: true,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: false,
          // });
        }
        // if (respons.status === 400) {
        //   console.log("WRONG Username");
        //   window.alert("Username doesn't exist");
        // }
        // if (respons.status === 401) {
        //   console.log("wRONG password");
        //   window.alert("Password error ");
        // }
      } catch (error) {
        console.log("this is error ", error);
      }
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
              {/* <ToastContainer /> */}
              <Row>
                <Col>
                  <Form.Group controlId="valdidation1">
                    <Form.Control
                      required
                      placeholder="Username"
                      pattern="/[a-zA-Z0-9._%+- ]+\@ [a-z0-9.-]+\[a-z]{2,8}(•[a-z{2,8}])?/g"
                      className={style.input}
                      type="email"
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
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
                  <Link to="/movies">
                    <Button type="submit" className={style.button}>
                      <p>LOGIN</p>
                    </Button>
                  </Link>
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
