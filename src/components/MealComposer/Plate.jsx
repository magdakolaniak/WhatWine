import './MealComposer.css';
import { Row, Col, Card } from 'react-bootstrap';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext, useState } from 'react';
import WineModal from './WineModal';
import { GiGrapes } from 'react-icons/gi';

import RecipeModal from './RecipeModal';

const Plate = () => {
  const { dishes, recipe } = useContext(LoginContext);
  const [wineModalShow, setWineModalShow] = useState(false);
  const [recipeModalShow, setRecipeModalShow] = useState(false);
  const [dishId, setDishId] = useState('');
  const [recipeDishId, setRecipeDishId] = useState('');
  const [dishFullName, setDishFullName] = useState('');

  return (
    <>
      <div
        className="plateMainDiv"
        style={dishes.length > 0 ? { height: '800px' } : { height: '300px' }}
      >
        {recipe.ingredients.length === 0 ? (
          <>
            <div className="welcomePart">
              Use panel on the left to describe dish you are looking for!
            </div>
            <div className="welcomePart">
              Your recipies ideas will show up here once selected
            </div>
            <div className="dotsLoading">
              <div className="loading">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        <Row className="d-flex">
          {dishes.length > 0
            ? dishes.map((dish) => (
                <Col xs={6} md={4} key={dish.id}>
                  <Card className="cardWrapper entranceList">
                    <Card.Img src={dish.image} className="imgCard" />
                    <Card.Body>
                      <Card.Title className="dishTitle">
                        {dish.title}
                      </Card.Title>

                      <div className="recipeDiv">
                        <button
                          className="buttonRecipe"
                          onClick={() => {
                            setRecipeDishId(dish.id);
                            setDishFullName(dish.title);
                            setRecipeModalShow(true);
                          }}
                        >
                          <img
                            src="https://res.cloudinary.com/dii3cculv/image/upload/v1631648257/cuisine_zxw2f6.png"
                            className="recipeIcon"
                            alt="recipe-icon"
                          />
                        </button>
                      </div>

                      <div className="buttonDiv">
                        <button
                          className="buttonWineModal"
                          onClick={() => {
                            setDishId(dish.id);

                            setWineModalShow(true);
                          }}
                        >
                          <span style={{ padding: '5px' }}>
                            <GiGrapes
                              style={{ fontSize: '36px', padding: '2px' }}
                            />
                            <span className="grapesButtonPlate">WhatWine?</span>
                          </span>
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : ''}
        </Row>{' '}
        <WineModal
          show={wineModalShow}
          onHide={() => setWineModalShow(false)}
          dish={dishId}
        />
        <RecipeModal
          show={recipeModalShow}
          onHide={() => setRecipeModalShow(false)}
          recipe={recipeDishId}
          dish={dishFullName}
        />
      </div>
    </>
  );
};

export default Plate;
