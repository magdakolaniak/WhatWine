import './Styles/LeftUser.css';
import { Container, Row, Col, Form, Alert, Spinner } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { IoMdDoneAll } from 'react-icons/io';

import Behind from './Behind';
import axios from 'axios';

const LeftUser = () => {
  const URL = process.env.REACT_APP_BE_URL;
  const { user, setUser } = useContext(LoginContext);

  const [behindModal, setBehindModal] = useState(false);
  const [newUser, setNewUser] = useState({
    firstname: `${user.firstname}`,
    lastname: `${user.lastname}`,
    email: `${user.email}`,
    city: `${user.city}`,
  });
  const [show, setShow] = useState(false);
  const [saving, setSaving] = useState(false);
  const showProfile = () => {
    let content = document.getElementById('accountDetails');

    let button = document.getElementById('showHideButton');
    if (content.style.display === 'block') {
      content.style.display = 'none';
      button.innerText = 'Show';
    } else {
      content.style.display = 'block';
      button.innerText = 'Hide';
    }
  };
  const showWineries = () => {
    let content = document.getElementById('wineriesRow');
    let button = document.getElementById('showHideWinery');
    if (content.style.display === 'block') {
      content.style.display = 'none';
      button.innerText = 'Show';
    } else {
      content.style.display = 'block';
      button.innerText = 'Hide';
    }
  };
  const showArticles = () => {
    let content = document.getElementById('articlesRow');
    let button = document.getElementById('showHideArticles');
    if (content.style.display === 'block') {
      content.style.display = 'none';
      button.innerText = 'Show';
    } else {
      content.style.display = 'block';
      button.innerText = 'Hide';
    }
  };

  const enableEdit = () => {
    let info = document.getElementById('editMode');
    let editButton = document.getElementById('editProfile');
    let inputs = document.querySelectorAll('input');
    let saveButton = document.getElementById('saveProfile');
    if (editButton.innerText === 'Edit') {
      editButton.innerText = 'Skip';
      editButton.style.backgroundColor = ' #800';
      saveButton.style.display = 'block';
      info.style.display = 'flex';
      inputs.forEach((el) => {
        el.removeAttribute('disabled');
      });
    } else if (editButton.innerText === 'Skip') {
      editButton.innerText = 'Edit';
      editButton.style.backgroundColor = '#303841';
      saveButton.style.display = 'none';
      info.style.display = 'none';
      inputs.forEach((el) => {
        el.setAttribute('disabled', true);
      });
    }
  };
  const handleChange = (e) => {
    let id = e.target.id;
    setNewUser({ ...newUser, [`${id}`]: e.target.value });
  };
  const submitChange = async () => {
    let saveButton = document.getElementById('saveProfile');
    saveButton.style.display = 'none';
    let info = document.getElementById('editMode');
    info.style.display = 'none';
    setSaving(true);
    console.log(newUser);
    try {
      const res = await axios.put(URL + `/user/edit/${user._id}`, newUser);
      if (res.status === 200) {
        let ticks = document.getElementById('doneTicks');
        ticks.style.display = 'block';
        setShow(true);
        setSaving(false);
        setUser(res.data);
      }
    } catch (error) {}
  };
  const onAlertClose = () => {
    let editButton = document.getElementById('editProfile');
    let inputs = document.querySelectorAll('input');
    inputs.forEach((el) => {
      el.setAttribute('disabled', true);
    });
    editButton.innerText = 'Edit';
    editButton.style.backgroundColor = '#303841';
    setSaving(false);
    setShow(false);
    let ticks = document.getElementById('doneTicks');
    ticks.style.display = 'none';
  };
  return (
    <>
      <Container className="mainLeft">
        {show ? (
          <Alert variant="success" onClose={onAlertClose} dismissible>
            <Alert.Heading style={{ textAlign: 'center', fontSize: '16px' }}>
              Your changes has been saved
            </Alert.Heading>
          </Alert>
        ) : (
          ''
        )}

        <Row>
          <Col xs={12} md={12}>
            <div style={{ padding: '10px' }}>
              <span id="accountDetailsWrapper">Your account details</span>
              <span
                id="showHideButton"
                className="showHideClick"
                onClick={showProfile}
              >
                Hide
              </span>
            </div>
          </Col>
          <div
            id="editMode"
            className="fade-in-top"
            style={{ display: 'none' }}
          >
            Click on a field to edit!
          </div>
        </Row>
        <Row>
          <Col
            id="accountDetails"
            style={{ display: 'block' }}
            className="fade-in-top"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              id="firstname"
              defaultValue={user.firstname}
              type="text"
              className="input"
              disabled
              onChange={handleChange}
            />
            <Form.Label>Last name</Form.Label>
            <Form.Control
              id="lastname"
              defaultValue={user.lastname}
              type="text"
              className="input"
              disabled
              onChange={handleChange}
            />
            <Form.Label>E-mail address</Form.Label>
            <Form.Control
              id="email"
              defaultValue={user.email}
              type="text"
              className="input"
              disabled
              onChange={handleChange}
            />
            <Form.Label>City</Form.Label>
            <Form.Control
              id="city"
              defaultValue={user.city}
              type="text"
              className="input"
              disabled
              onChange={handleChange}
            />

            <Row>
              <div style={{ width: '345px' }}>
                <span
                  id="editProfile"
                  className="editSkipButton"
                  onClick={enableEdit}
                >
                  Edit
                </span>

                <span
                  id="saveProfile"
                  className="showHideClick"
                  style={{ backgroundColor: ' #006633', display: 'none' }}
                  onClick={submitChange}
                >
                  Save
                </span>
                {saving ? (
                  <span style={{ float: 'right' }}>
                    {' '}
                    <Spinner animation="border" variant="success" />
                  </span>
                ) : (
                  ''
                )}
                <span
                  id="doneTicks"
                  style={{
                    float: 'right',
                    marginRight: '20px',
                    display: 'none',
                  }}
                >
                  <IoMdDoneAll
                    style={{
                      fontSize: '30px',
                      fontWeight: 'bold',
                      color: '#006633',
                    }}
                  />
                </span>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="mainLeft">
        <Row>
          <Col xs={12} md={12}>
            <div style={{ padding: '10px' }}>
              <span id="accountDetailsWrapper">Wineries near you</span>
              <span
                id="showHideWinery"
                className="showHideClick"
                onClick={showWineries}
              >
                Show
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} id="wineriesRow" style={{ display: 'none' }}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              Come back later for some more content!
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mainLeft">
        <Row>
          <Col xs={12} md={12}>
            <div style={{ padding: '10px' }}>
              <span id="accountDetailsWrapper">Your saved articles</span>
              <span
                id="showHideArticles"
                className="showHideClick"
                onClick={showArticles}
              >
                Show
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} id="articlesRow" style={{ display: 'none' }}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              Come back later for some more content!
            </div>
          </Col>
        </Row>
      </Container>

      <div className="aboutMeClick">
        {' '}
        Behind the scenes{' '}
        <img
          onClick={() => {
            setBehindModal(true);
          }}
          src="https://res.cloudinary.com/dii3cculv/image/upload/v1631648519/door_zx4zit.png"
          alt="door"
          style={{
            cursor: 'pointer',
            height: '40px',
            paddingLeft: '20px',
            filter: 'drop-shadow(8px 10px 15px rgba(0, 0, 0, 0.468))',
          }}
        />
      </div>
      <Behind show={behindModal} onHide={() => setBehindModal(false)} />
    </>
  );
};

export default LeftUser;
