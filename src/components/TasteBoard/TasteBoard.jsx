import './TasteBoard.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const TasteBoard = () => {
  const { setFromBoard, grapeColor } = useContext(LoginContext);

  const myFunc = (e) => {
    console.log(e.currentTarget.id);
    setFromBoard(e.currentTarget.id);
  };

  return (
    <>
      <Container
        style={{ background: grapeColor === 'red' ? '#800000' : '#d4af37' }}
        className="box2 fluid"
      >
        <Row>
          <Col xs={2} md={true}>
            <div id="lightDry" className="box-single" onClick={myFunc}>
              light dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            {' '}
            <div id="med-Dry" className="box-single" onClick={myFunc}>
              med - dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medDry" className="box-single" onClick={myFunc}>
              med dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            {' '}
            <div id="med+Dry" className="box-single" onClick={myFunc}>
              med + dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            {' '}
            <div id="fullDry" className="box-single" onClick={myFunc}>
              full dry
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={true}>
            <div id="lightOff" className="box-single" onClick={myFunc}>
              light off dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="med-Off" className="box-single" onClick={myFunc}>
              med - off dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medOff" className="box-single" onClick={myFunc}>
              med off dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="med+Off" className="box-single" onClick={myFunc}>
              med + off dry
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="fullOff" className="box-single" onClick={myFunc}>
              full off dry
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={true}>
            <div id="lightSweet" className="box-single" onClick={myFunc}>
              light sweet
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="med-Sweet" className="box-single" onClick={myFunc}>
              med - sweet
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="medSweet" className="box-single" onClick={myFunc}>
              med sweet
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="med+Sweet" className="box-single" onClick={myFunc}>
              med + sweet
            </div>
          </Col>
          <Col xs={2} md={true}>
            <div id="fullSweet" className="box-single" onClick={myFunc}>
              full sweet
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
