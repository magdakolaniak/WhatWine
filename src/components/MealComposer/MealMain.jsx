import { Row, Col } from 'react-bootstrap';
import LeftNav from './LeftNav.jsx';
import Plate from './Plate.jsx';
import './MealComposer.css';
import NewNav from '../MyNav/NewNav.jsx';

const MealMain = () => {
  return (
    <>
      <div className="mealMainDiv">
        <NewNav />
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
