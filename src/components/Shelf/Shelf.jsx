import { Container, Row, Col } from 'react-bootstrap';
import './Shelf.css';

const Shelf = () => {
  return (
    <>
      <Container className="mainShelf">
        <Row>
          <Col md={4}>first</Col>
          <Col md={4}>second</Col>
          <Col md={4}>last</Col>
        </Row>
        <Row>
          <Col md={4}>first</Col>
          <Col md={4}>second</Col>
          <Col md={4}>last</Col>
        </Row>
      </Container>
    </>
  );
};

export default Shelf;
