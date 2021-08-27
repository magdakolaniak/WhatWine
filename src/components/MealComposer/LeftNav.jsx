import './MealComposer.css';
import { Accordion } from 'react-bootstrap';
import chicken from '../assets/icons2/001-chicken.png';
import beef from '../assets/icons2/003-cow.png';
import duck from '../assets/icons2/002-duck.png';
import fish from '../assets/icons2/004-seafood.png';
import fry from '../assets/icons2/001-cooking.png';
import boil from '../assets/icons2/002-boil.png';
import bake from '../assets/icons2/003-baking.png';

import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const LeftNav = () => {
  const { ingredients, setIngredients } = useContext(LoginContext);

  const handleClickMain = (e) => {
    e.preventDefault();
    let element = e.currentTarget.id;
    const component = document.getElementById(element);
    component.classList.add('fadeOut');
    setIngredients({
      ...ingredients,
      main: e.currentTarget.id,
    });
  };
  const handleClickMethod = (e) => {
    e.preventDefault();
    let element = e.currentTarget.id;
    const component = document.getElementById(element);
    component.classList.add('fadeOut');
    setIngredients({
      ...ingredients,
      method: e.currentTarget.id,
    });
  };

  return (
    <>
      <div className="navMainDiv d-flex">
        <div className="instructions">
          Choose your ingredients from the lists below and add them to your
          Plate
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Main Ingredient</Accordion.Header>
            <Accordion.Body id="mainIngred">
              <div>
                {' '}
                Here is place for you to pick main ingredient that will be
                dominant in your dish. Click on icon to ADD!
              </div>
              <div className="iconsWrapper">
                <img
                  src={chicken}
                  id="chicken"
                  alt="chicken-logo"
                  className="iconSize"
                  onClick={handleClickMain}
                />
                <div className="middle"> chicken</div>
              </div>
              <div className="iconsWrapper">
                <img
                  src={beef}
                  id="beef"
                  alt="chicken-logo"
                  className="iconSize"
                  onClick={handleClickMain}
                />
                <div className="middle"> beef</div>
              </div>
              <div className="iconsWrapper">
                <img
                  src={duck}
                  id="duck"
                  alt="duck-logo"
                  className="iconSize"
                  onClick={handleClickMain}
                />
                <div className="middle"> duck</div>
              </div>
              <div className="iconsWrapper">
                <img
                  src={fish}
                  id="fish"
                  alt="fish-logo"
                  className="iconSize"
                  onClick={handleClickMain}
                />
                <div className="middle"> fish</div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Cooking method</Accordion.Header>
            <Accordion.Body id="cookingMethod">
              <div>
                {' '}
                Here is place for you to pick main ingredient that will be
                dominant in your dish. Click on icon to ADD!
              </div>
              <div className="iconsWrapper">
                <img
                  src={fry}
                  id="fried"
                  alt="chicken-logo"
                  className="iconSize"
                  onClick={handleClickMethod}
                />
                <div className="middle"> frying</div>
              </div>
              <div className="iconsWrapper">
                <img
                  src={boil}
                  id="boiled"
                  alt="chicken-logo"
                  className="iconSize"
                  onClick={handleClickMethod}
                />
                <div className="middle"> boiling</div>
              </div>
              <div className="iconsWrapper">
                <img
                  src={bake}
                  id="baked"
                  alt="chicken-logo"
                  className="iconSize"
                  onClick={handleClickMethod}
                />
                <div className="middle"> baking</div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Side Dishes</Accordion.Header>
            <Accordion.Body id="sideDishes">
              <div>
                {' '}
                Here is place for you to pick main ingredient that will be
                dominant in your dish. Click on icon to ADD!
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Spices</Accordion.Header>
            <Accordion.Body id="spices">
              <div>
                {' '}
                Here is place for you to pick main ingredient that will be
                dominant in your dish. Click on icon to ADD!
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
export default LeftNav;
