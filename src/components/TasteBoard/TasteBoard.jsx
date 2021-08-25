import './TasteBoard.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const TasteBoard = () => {
  const { setTasteProfile, grapeColor } = useContext(LoginContext);

  const myFunc = (e) => {
    setTasteProfile({
      body: e.currentTarget.id,
      sweetness: e.currentTarget.innerHTML,
    });
  };

  return (
    <>
      <Container
        style={{ background: grapeColor === 'red' ? '#800000' : '#d4af37' }}
        className="box2 fluid"
      >
        <Row>
          <Col xs={2} md={true}>
            <div id="light" value="dry" className="box-single" onClick={myFunc}>
              dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            {' '}
            <div id="medium minus" className="box-single" onClick={myFunc}>
              dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medium" className="box-single" onClick={myFunc}>
              dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            {' '}
            <div id="medium plus" className="box-single" onClick={myFunc}>
              dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            {' '}
            <div id="full" className="box-single" onClick={myFunc}>
              dry
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={true}>
            <div id="light" className="box-single" onClick={myFunc}>
              off dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medium minus" className="box-single" onClick={myFunc}>
              off dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medium" className="box-single" onClick={myFunc}>
              off dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medium plus" className="box-single" onClick={myFunc}>
              off dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="full" className="box-single" onClick={myFunc}>
              off dry
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={true}>
            <div id="light" className="box-single" onClick={myFunc}>
              sweet
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medium minus" className="box-single" onClick={myFunc}>
              sweet
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medium" className="box-single" onClick={myFunc}>
              sweet
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medium plus" className="box-single" onClick={myFunc}>
              sweet
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="full" className="box-single" onClick={myFunc}>
              sweet
            </div>
          </Col>
        </Row>
        <span className="lightBody"> LIGHT BODIED</span>
        <span className="fullBody"> FULL BODIED</span>
        <span className="sweet"> SWEET</span>
        <span className="dry"> DRY</span>
      </Container>
    </>
  );
};

export default TasteBoard;
