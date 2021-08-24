import { Container, Row, Col, OverlayTrigger } from 'react-bootstrap';
import './Shelf.css';

import bottle from './bottle.png';

const Shelf = () => {
  return (
    <>
      <Container className="mainShelf">
        <Row className="mainSingleShelf d-flex">
          <div className="scroll">
            <OverlayTrigger
              key="right"
              placement="right"
              overlay={
                <div className="overlayText">
                  {' '}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quae, iste minima eos aliquid blanditiis perspiciatis illum
                  earum repellat, itaque, at optio aut. Accusantium repellat
                  dignissimos voluptatem necessitatibus rerum voluptates sit?
                </div>
              }
            >
              <img src={bottle} alt="bottle" className="img-fluid bottle" />
            </OverlayTrigger>

            <img src={bottle} alt="bottle" className="img-fluid bottle" />
            <img src={bottle} alt="bottle" className="img-fluid bottle" />
            <img src={bottle} alt="bottle" className="img-fluid bottle" />
            <img src={bottle} alt="bottle" className="img-fluid bottle" />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Shelf;
