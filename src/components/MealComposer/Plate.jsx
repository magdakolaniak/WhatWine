import './MealComposer.css';
import { Table, Row, Col } from 'react-bootstrap';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const Plate = () => {
  const { ingredients, setIngredients } = useContext(LoginContext);

  return (
    <div className="plateMainDiv">
      {ingredients.main.length === 0 ? (
        <div className="plateTitle ">
          Let's add some ingredients from the left and explore the wine options
          that will match!
        </div>
      ) : (
        <>
          <br></br>
          <br></br>
          <Row className="d-flex">
            <Col s={6} md={6} className="listColumn">
              {' '}
              {ingredients.main.length > 1 ? (
                <div className="entranceList">MAIN INGREDIENTS</div>
              ) : (
                ''
              )}
              {ingredients.method.length > 1 ? (
                <div className="entranceList">COOKING METHOD</div>
              ) : (
                ''
              )}
              {ingredients.side.length > 1 ? (
                <div className="entranceList">SIDE DISHES</div>
              ) : (
                ''
              )}
              {ingredients.spices.length > 1 ? (
                <div className="entranceList">SPICES</div>
              ) : (
                ''
              )}
            </Col>
            <Col md={6} className="choiceColumn">
              {' '}
              {ingredients.main.length > 1 ? (
                <div className="entranceList">{ingredients.main}</div>
              ) : (
                ''
              )}
              {ingredients.method.length > 1 ? (
                <div className="entranceList">{ingredients.method}</div>
              ) : (
                ''
              )}
              {ingredients.side.length > 1 ? (
                <div className="entranceList">{ingredients.side}</div>
              ) : (
                ''
              )}
              {ingredients.spices.length > 1 ? (
                <div className="entranceList">{ingredients.spices}</div>
              ) : (
                ''
              )}
            </Col>
          </Row>{' '}
        </>
      )}
    </div>
  );
};
export default Plate;
