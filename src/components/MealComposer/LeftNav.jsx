import './MealComposer.css';
import { Accordion, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';
import { TiTick } from 'react-icons/ti';
import { useEffect } from 'react';

const LeftNav = () => {
  const { recipe, setRecipe, setDishes } = useContext(LoginContext);
  const cuisineList = [
    'American',
    'British',
    'Chinese',
    'French',
    'German',
    'Greek',
    'Indian',
    'Italian',
    'Japanese',
    'Korean',
    'Mexican',
    'Spanish',
    'Thai',
    ' Vietnamese',
  ];
  const mealTypeList = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
  ];
  const intoleranceList = [
    'Dairy',
    'Egg',
    'Gluten',
    'Grain',
    'Peanut',
    'Seafood',
    'Sesame',
    'Shellfish',
    'Soy',
    'Sulfite',
    'Tree Nut',
    'Wheat',
  ];

  const cuisineChoice = (e) => {
    let id = e.currentTarget.id;
    setRecipe({
      ...recipe,
      cuisine: id,
    });
    let cuisineTypeItem = document.getElementById(id);
    cuisineTypeItem.classList.toggle('cuisineItemClicked');
  };
  const mealTypeChoice = (e) => {
    let id = e.currentTarget.id;
    setRecipe({
      ...recipe,
      mealType: id,
    });
    let mealTypeItem = document.getElementById(id);
    mealTypeItem.classList.toggle('cuisineItemClicked');
  };
  const intoleranceChoice = (e) => {
    let id = e.currentTarget.id;
    setRecipe({
      ...recipe,
      intolerances: [...recipe.intolerances, id],
    });
    let intoleranceItem = document.getElementById(id);
    intoleranceItem.classList.toggle('cuisineItemClicked');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let input = event.currentTarget.value;
      setRecipe({
        ...recipe,
        ingredients: [...recipe.ingredients, input],
      });

      event.currentTarget.value = '';
    }
  };

  let APIUrl = 'https://api.spoonacular.com/recipes/complexSearch?';
  let key = process.env.REACT_APP_API_KEY_M;
  useEffect(() => {
    const getRecipes = async (recipe) => {
      if (recipe.ingredients.length > 0) {
        const data = await axios(
          APIUrl +
            `query=${recipe.ingredients}&cuisine=${recipe.cuisine}&type=${recipe.mealType}&intolerances=${recipe.intolerances}&number=6&apiKey=${key}`
        );

        setDishes(data.data.results);
      }
    };
    if (recipe.ingredients.length > 0) {
      getRecipes(recipe);
    }
  }, [recipe]);

  const refresh = () => {
    let list = document.querySelectorAll('.cuisineItemClicked');

    list.forEach((el) => el.classList.remove('cuisineItemClicked'));

    setRecipe({
      cuisine: '',
      ingredients: [],
      mealType: '',
      intolerances: [],
    });
    setDishes([]);
  };

  return (
    <>
      <div className="navMainDiv d-flex">
        <div className="instructions">
          What is in your mind today?
          <div>
            <img
              src="https://res.cloudinary.com/dii3cculv/image/upload/v1631648182/bake_dd5bs2.png"
              className="bakeIcon"
              alt="bake-icon"
            />
          </div>
        </div>
        <Accordion id="myAccordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Cuisine style</Accordion.Header>
            <Accordion.Body id="mainIngred" className="d-flex">
              <div className="cuisineStyleHeader">
                {' '}
                Select the style of cuisine you would like to find recipe for
                <hr></hr>
              </div>
              {cuisineList.map((item, i) => (
                <span
                  key={i}
                  className="cuisineItem"
                  id={item}
                  onClick={cuisineChoice}
                >
                  {item}
                </span>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Meal Type</Accordion.Header>
            <Accordion.Body id="mainIngred" className="d-flex">
              <div className="cuisineStyleHeader">
                {' '}
                Are you looking to cook main course or...?
                <hr></hr>
              </div>
              {mealTypeList.map((item, i) => (
                <span
                  key={i}
                  className="cuisineItem"
                  id={item}
                  onClick={mealTypeChoice}
                >
                  {item}
                </span>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Intolerances</Accordion.Header>
            <Accordion.Body id="mainIngred" className="d-flex">
              <div className="cuisineStyleHeader">
                Please select also your food intolerances if you have any
                <hr></hr>
              </div>
              {intoleranceList.map((item, i) => (
                <span
                  key={i}
                  className="cuisineItem"
                  id={item}
                  onClick={intoleranceChoice}
                >
                  {item}
                </span>
              ))}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Include ingredients</Accordion.Header>
            <Accordion.Body id="cookingMethod">
              <div className="beforeInput cuisineStyleHeader">
                Add ingredients which you would like to include in your recipe
              </div>
              <div>
                <FormControl
                  type="text"
                  placeholder="Type and click ENTER to add"
                  onKeyPress={handleKeyPress}
                  className="inputLeftNav"
                />
                <ul id="listIndicators">
                  {recipe && recipe.ingredients.length > 0
                    ? recipe.ingredients.map((item, i) => (
                        <span className="ingredItem" key={i}>
                          <li>
                            <TiTick className="tickIcon" />
                            {item}
                          </li>
                        </span>
                      ))
                    : ''}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="instructionsDown">
          <button className="buttonStylingClear" onClick={refresh}>
            Clear your choices
          </button>
        </div>
      </div>
    </>
  );
};
export default LeftNav;
