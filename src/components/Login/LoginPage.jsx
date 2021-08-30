import { Container, Row, Col, Form } from 'react-bootstrap';
import './LoginPage.css';
import axios from 'axios';
import RegisterForm from './RegisterForm.jsx';
import { GiGrapes } from 'react-icons/gi';
import { useState, useContext } from 'react';

import { LoginContext } from '../GlobalState/GlobalState.jsx';

let text = '{ Your personal Sommelier }';
function LoginPage({ history }) {
  const [signUp, setSignUp] = useState(false);
  const [validation, setValidation] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setLoggedIn, setUser } = useContext(LoginContext);
  const URL = process.env.REACT_APP_BE_URL;
  const hideModal = () => {
    setSignUp(false);
  };

  const base64 = (input) => {
    return new Buffer(input).toString('base64');
  };

  const submitHandler = async () => {
    console.log(email, password);
    if (email !== '' && password !== '') {
      const res = await axios(URL + `/user/login`, {
        headers: {
          Authorization: `Basic ${base64([email, password].join(':'))}`,
        },
      });
      console.log(res.data);
      if (res.status === 200) {
        setLoggedIn(true);
        setUser(res.data);
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
            <Col className="mb-2" sm={12} md={4}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  className="mt-3 mx-auto"
                ></div>
              </div>
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
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  isInvalid={!validation}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
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
                <button
                  onClick={submitHandler}
                  // className={
                  //   Loading ? 'disabledButton' : 'loginFormSubmitButton'
                  // }
                  disabled={Loading}
                >
                  {' '}
                  CLICK HERE
                </button>
                {/* <Link to="/home" className="loginFormButton">
                  LOG IN
                </Link> */}

                <div
                  className="GreenLink ml-2 ml-md-0"
                  onClick={() => setSignUp(true)}
                >
                  Don't have an account ? Sign Up!
                </div>
              </div>
            </Form>
          </Container>
        </div>
        <RegisterForm showModal={signUp} hideModal={hideModal} />
      </div>
    </div>
  );
}

export default LoginPage;
