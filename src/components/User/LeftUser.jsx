import './Styles/LeftUser.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import door from '../../components/assets/images/door.png';
import Behind from './Behind';

const LeftUser = () => {
  const { user } = useContext(LoginContext);
  const [disable] = useState(true);
  const [behindModal, setBehindModal] = useState(false);

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

  return (
    <>
      <Container className="mainLeft">
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
        </Row>
        <Row>
          <Col
            id="accountDetails"
            style={{ display: 'block' }}
            className="fade-in-top"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={user.firstname}
              type="text"
              className="input"
              disabled={disable}
            />
            <Form.Label>Last name</Form.Label>
            <Form.Control
              defaultValue={user.lastname}
              type="text"
              className="input"
              disabled={disable}
            />
            <Form.Label>E-mail address</Form.Label>
            <Form.Control
              defaultValue={user.email}
              type="text"
              className="input"
              disabled={disable}
            />
            <Form.Label>City</Form.Label>
            <Form.Control
              defaultValue={user.city}
              type="text"
              className="input"
              disabled={disable}
            />
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
            <div>here will be google maps</div>
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
            <div>Here you can go back to your articles</div>
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
          src={door}
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
