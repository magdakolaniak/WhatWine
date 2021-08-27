import { Container, Row, Col, Form } from 'react-bootstrap';
import './LoginPage.css';
import RegisterForm from './RegisterForm.jsx';
import { GiGrapes } from 'react-icons/gi';
import { useState, useRef, useContext } from 'react';
import { getRequest } from '../../lib/axios.js';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { Link } from 'react-router-dom';

const ADDRESS = process.env.REACT_APP_BE_URL;
let text = '{ Your personal Sommelier }';
function LoginPage({ history }) {
  const [signUp, setSignUp] = useState(false);
  const [validation, setValidation] = useState(true);
  const [Loading, setLoading] = useState(false);

  const { setLoggedIn, setUser } = useContext(LoginContext);

  const hideModal = () => {
    setSignUp(false);
  };
  const email = useRef(undefined);
  // .current points to the html Object atm
  // so value === current.value
  const password = useRef(undefined);

  const base64 = (input) => {
    return new Buffer(input).toString('base64');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (email.current.value !== '' && password.current.value !== '') {
        const res = await getRequest('users/login', {
          headers: {
            Authorization: `Basic ${base64(
              [email.current.value, password.current.value].join(':')
            )}`,
          },
        });
        if (res.status === 200) {
          setValidation(true);
          setUser(res.data);
          setLoggedIn(true);
          setLoading(false);

          history.push('/home');
        }
      } else {
        setValidation(false);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response?.status === 401) {
        setUser({});
        setLoggedIn(false);
        setValidation(false);
      } else {
        console.log(error);
        alert(error.message);
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
                <div className="underText"> {text}</div>
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
                  ref={email}
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  isInvalid={!validation}
                  type="password"
                  ref={password}
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
                {/* <button
                onClick={(e) => submitHandler(e)}
                className={Loading ? 'disabledButton' : 'loginFormSubmitButton'}
                disabled={Loading}
              >
                {!Loading ? 'Log In' : 'Loading'}
                {'  '}
                {Loading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </button> */}
                <Link to="/home" className="loginFormButton">
                  LOG IN
                </Link>

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
