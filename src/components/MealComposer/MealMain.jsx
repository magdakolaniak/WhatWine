import { Row, Col } from 'react-bootstrap';
import LeftNav from './LeftNav.jsx';
import Plate from './Plate.jsx';
import './MealComposer.css';
import MyNav from '../MyNav/MyNav.jsx';

const MealMain = () => {
  return (
    <>
      <MyNav />
      <div className="mealMainDiv">
        <Row>
          <Col md={4}>
            <LeftNav />
          </Col>
          <Col md={8} className="mealMainRightCol">
            <Plate />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MealMain;
