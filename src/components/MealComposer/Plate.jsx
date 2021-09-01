import './MealComposer.css';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext, useState } from 'react';
import WineModal from './WineModal';
import { GiGrapes } from 'react-icons/gi';
import { Loading } from 'react-loading-dot';

const Plate = () => {
  const { dishes, recipe } = useContext(LoginContext);
  const [modalShow, setModalShow] = useState(false);
  const [dishId, setDishId] = useState('');

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
                          {dish.id}
                        </Row>
                      </Card.Text>
                      <button
                        className="buttonStyling"
                        onClick={() => {
                          setModalShow(true);
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
          show={modalShow}
          onHide={() => setModalShow(false)}
          dishId={dishId}
        />
      </div>
    </>
  );
};

export default Plate;
