import { Container, Row, Col, Form } from 'react-bootstrap';
import './LoginPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GiGrapes } from 'react-icons/gi';
import { useState, useContext } from 'react';

import { LoginContext } from '../GlobalState/GlobalState.jsx';

let text = '{ Your personal Sommelier }';

const LoginPage = ({ history }) => {
  const [signUp, setSignUp] = useState(false);
  const [validation, setValidation] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setLoggedIn, setUser, setWeather, setNews } =
    useContext(LoginContext);
  const URL = process.env.REACT_APP_BE_URL;

  const base64 = (input) => {
    return new Buffer(input).toString('base64');
  };

  const getUserWeather = async (city) => {
    try {
      const api = '5a17452b42ea63a877f8f2b5ea332bf5';
      const data = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
      );
      setWeather(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getNews = async () => {
    try {
      const key = 'b26bae29738f43acaa41e51752b4186b';
      const news = await axios(
        `https://newsapi.org/v2/everything?q=winery&from=2021-08-15&sortBy=publishedAt&apiKey=${key}`
      );
      setNews(news.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async () => {
    if (email !== '' && password !== '') {
      const res = await axios(URL + `/user/login`, {
        headers: {
          Authorization: `Basic ${base64([email, password].join(':'))}`,
        },
      });

      if (res.status === 200) {
        setLoggedIn(true);
        setUser(res.data);

        getUserWeather(res.data.city);
        getNews();

        history.push('/home');
      }
    }
  };

  return (
    <div className="background">
      <div className="mainDiv">
        <Container>
          <Row className="mt-5 ml-5 d-flex">
            <Col sm={12} className="px-5">
              <div className="loginTitle">
                <span className="logoTitle">
                  <GiGrapes className="loginIcon" />
                  WhatWine?
                </span>
                <span className="underTextWrapper">
                  <p className="underText anim-typewriter"> {text}</p>
                </span>
              </div>
              <div className="quote">
                “I cook with wine, sometimes I even add it to the food.”
              </div>
              <div className="underQuote">― W.C. Fields</div>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            width: '100%',
            backgroundColor: '#d3d6db',
          }}
        >
          <Container>
            <Row>
              <Col md={6}>
                <Form
                  className="py-5 px-5 w-sm-100 w-lg-50 mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      isInvalid={!validation}
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="loginInputs"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      isInvalid={!validation}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="loginInputs"
                    />
                  </Form.Group>
                  {!validation && (
                    <p className="wrongValidation">Wrong Credentials </p>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <button onClick={submitHandler} className="buttonLoginPage">
                      Jump in!
                    </button>

                    <div
                      className="GreenLink ml-2 ml-md-0"
                      onClick={() => setSignUp(true)}
                    >
                      Don't have an account ? Sign Up!
                    </div>
                  </div>
                </Form>
              </Col>
              <Col md={6} className="rightColumnLogin">
                <Link to="/home">
                  {' '}
                  <div className="righSectionLogin buttonLoginPage">
                    Explore as a guest
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <RegisterForm
          show={loginModalShow}
          onHide={() => setLoginModalShow(false)}
        /> */}
      </div>
    </div>
  );
};

export default LoginPage;
