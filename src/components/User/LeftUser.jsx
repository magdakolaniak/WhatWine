import './Styles/LeftUser.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';

const LeftUser = () => {
  const { user } = useContext(LoginContext);
  const [disable, setDisable] = useState(true);

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

  return (
    <>
      <Container className="mainLeft">
        <Row>
          <Col xs={12} md={12}>
            <div style={{ padding: '10px' }}>
              <span id="accountDetailsWrapper">Your account details</span>
              <span id="showHideButton" onClick={showProfile}>
                Show
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            id="accountDetails"
            style={{ display: 'none' }}
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
    </>
  );
};

export default LeftUser;
