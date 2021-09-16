import { Modal, Col, Container, Row, Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { BiExit } from 'react-icons/bi';
import './LoginPage.css';
import axios from 'axios';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { withRouter } from 'react-router';

function RegisterModal({ showModal, hideModal, history }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    city: '',
    password: '',
  });

  const { setLoggedIn, setUser, setWeather, setNews } =
    useContext(LoginContext);
  const URL = process.env.REACT_APP_BE_URL;

  const handleChange = (e) => {
    let id = e.target.id;
    setNewUser({ ...newUser, [`${id}`]: e.target.value });
  };

  const handleClose = () => {
    setShow(false);
    hideModal();
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
  const getNews = async () => {
    try {
      const key = process.env.REACT_APP_NEWS;
      const news = await axios(
        `https://newsapi.org/v2/everything?q=winery&from=2021-08-15&sortBy=publishedAt&apiKey=${key}`
      );
      setNews(news.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(URL + `/user/register`, newUser);

      if (res.status === 200) {
        console.log(res.data);
        setLoggedIn(true);
        setUser(res.data);

        getUserWeather(res.data.city);
        getNews();
        history.push('/home');
      }
    } catch (error) {
      console.log(error.message);
      if (error.response?.status === 401) {
        // socket.emit("offline", user._id);
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    }
  };

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  return (
    <>
      <Modal id="registerModal" show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: '#d3d6db' }}>
          <Modal.Title style={{ color: '#800' }}>
            <em>Registration Form</em>
            <BiExit className="formExit" onClick={() => handleClose()} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#d3d6db' }}>
          <Container className="mt-3">
            <Row>
              <Col className="mx-auto" sm={10}>
                <Form>
                  <Form.Control
                    id="firstname"
                    placeholder="First name"
                    className="loginInputs my-3"
                    onChange={handleChange}
                    required
                    title="Please provide first name"
                  />

                  <Form.Control
                    id="lastname"
                    className="loginInputs"
                    placeholder="Last name"
                    onChange={handleChange}
                    required
                    title="Please provide last name"
                  />

                  <Row>
                    <Form.Group className="my-3" as={Col}>
                      <Form.Control
                        id="email"
                        className="loginInputs"
                        onChange={handleChange}
                        type="email"
                        placeholder="E-mail"
                        required
                        title="Please provide e-mail"
                      />
                    </Form.Group>

                    <Form.Group className="mb-2 mt-3" as={Col}>
                      <Form.Control
                        id="password"
                        className="loginInputs"
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        required
                        title="Please provide password"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col className="mx-auto" sm={8}>
                      <Form.Control
                        id="city"
                        placeholder="Your city"
                        className="loginInputs my-1"
                        onChange={handleChange}
                        required
                        title="Please provide your city"
                      />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#d3d6db' }}>
          {isLoading ? (
            <>
              <div style={{ fontSize: '18px', fontWeight: 'bolder' }}>
                {' '}
                We are setting you up
              </div>

              <div className="dotsLoadingRegister">
                <div className="loading mb-4">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </>
          ) : (
            <button
              className=" mx-auto mb-3 buttonLoginPage"
              onClick={() => submitHandler()}
            >
              Submit
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withRouter(RegisterModal);
