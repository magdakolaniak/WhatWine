import { Container, Row, Col, Form } from 'react-bootstrap';
import './LoginPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GiGrapes } from 'react-icons/gi';
import { useState, useContext } from 'react';
import RegisterModal from './RegisterModal';

import { LoginContext } from '../GlobalState/GlobalState.jsx';

let text = '{ Your personal Sommelier }';

const LoginPage = ({ history }) => {
  const [signUp, setSignUp] = useState(false);
  const [validation] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setLoggedIn, setUser, setWeather, setNews } =
    useContext(LoginContext);
  const URL = process.env.REACT_APP_BE_URL;

  const hideModal = () => {
    setSignUp(false);
  };

  const base64 = (input) => {
    return new Buffer(input).toString('base64');
  };

  const getUserWeather = async (city) => {
    try {
      const api = process.env.REACT_APP_WEATHER;
      const data = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
      );
      setWeather(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getNews = () => {
    try {
      const newsKey = process.env.REACT_APP_NEWS;
      let options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: { q: 'winery', lang: 'en', page_size: '13' },
        headers: {
          'x-rapidapi-host': 'free-news.p.rapidapi.com',
          'x-rapidapi-key': `${newsKey}`,
        },
      };
      axios.request(options).then(function (response) {
        console.log(response.data.articles);
        if (response.status === 200) {
          setNews(response.data.articles);
        }
      });
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
      <Container className="mainDiv">
        <Row className="row-1">
          <Col sm={8} className="px-5">
            <div className="loginTitle">
              <span className="logoTitle">
                <GiGrapes className="loginIcon" />
                WhatWine?
              </span>
              <span className="underTextWrapper">
                <p className="underText anim-typewriter"> {text}</p>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="row-2">
          <Col xs={12}>
            <div className="quote">
              “I cook with wine, sometimes I even add it to the food.”
            </div>
            <div className="underQuote">― W.C. Fields</div>
          </Col>
        </Row>

        <Row className="row-3">
          <Col xs={12} md={6}>
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
              <Row>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginRight: '10px',
                    }}
                  >
                    <button onClick={submitHandler} className="buttonLoginPage">
                      Jump in!
                    </button>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div
                    style={{ textAlign: 'center' }}
                    onClick={() => setSignUp(true)}
                  >
                    Don't have an account ?<br></br>
                    <span className="signUp">Sign Up!</span>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col xs={12} md={6} className="rightColumnLogin">
            <Link to="/home">
              {' '}
              <div className="righSectionLogin buttonLoginPage">
                Explore as a guest
              </div>
            </Link>
          </Col>
        </Row>
      </Container>

      <RegisterModal showModal={signUp} hideModal={hideModal} />
    </div>
  );
};

export default LoginPage;
