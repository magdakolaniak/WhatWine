import './MealComposer.css';
import { Row, Col, Card } from 'react-bootstrap';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext, useState } from 'react';
import WineModal from './WineModal';
import { GiGrapes } from 'react-icons/gi';
import cuisine from '../assets/images/cuisine.png';

import RecipeModal from './RecipeModal';
import axios from 'axios';

const Plate = () => {
  const { dishes, recipe } = useContext(LoginContext);
  const [wineModalShow, setWineModalShow] = useState(false);
  const [recipeModalShow, setRecipeModalShow] = useState(false);
  const [dishId, setDishId] = useState('');
  const [dishFullName, setDishFullName] = useState('');
  const [cardUrl, setCardUrl] = useState('');

  const getCard = async () => {
    let APIUrl = 'https://api.spoonacular.com/recipes/';
    let key = process.env.REACT_APP_API_KEY_M;
    const card = await axios(APIUrl + `${dishId}/card?&apiKey=${key}`);
    console.log(card.data.url);
    setCardUrl(card.data.url);
  };

  return (
    <>
      <div
        className="plateMainDiv"
        style={dishes.length > 0 ? { height: '800px' } : { height: '300px' }}
      >
        {recipe.ingredients.length <= 0 ? (
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
                <Col md={4}>
                  <Card className="cardWrapper entranceList">
                    <Card.Img src={dish.image} className="imgCard" />
                    <Card.Body>
                      <Card.Title>{dish.title}</Card.Title>
                      <Card.Text>
                        <Row>
                          {/* <Col md={4}>one part</Col>
                    <Col md={8}> second part</Col> */}
                          <div
                            onClick={() => {
                              getCard();
                              setDishId(dish.id);
                              setDishFullName(dish.title);
                              setRecipeModalShow(true);
                            }}
                          >
                            <div>
                              <img
                                src={cuisine}
                                className="cuisineIcon"
                                alt="bake-icon"
                              />
                            </div>
                          </div>
                        </Row>
                      </Card.Text>
                      <button
                        className="buttonStyling"
                        onClick={() => {
                          setWineModalShow(true);
                          setDishId(dish.id);
                        }}
                      >
                        <span style={{ padding: '5px' }}>
                          <GiGrapes
                            style={{ fontSize: '36px', padding: '2px' }}
                          />
                          WhatWine?
                        </span>
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : ''}
        </Row>{' '}
        <WineModal
          show={wineModalShow}
          onHide={() => setWineModalShow(false)}
          dishId={dishId}
        />
        <RecipeModal
          show={recipeModalShow}
          onHide={() => setRecipeModalShow(false)}
          dishId={dishId}
          dishName={dishFullName}
          cardUrl={cardUrl}
        />
      </div>
    </>
  );
};

export default Plate;
