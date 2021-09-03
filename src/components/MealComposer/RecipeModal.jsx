import { Modal } from 'react-bootstrap';
import './Modals.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const RecipeModal = (props) => {
  const [cardUrl, setCardUrl] = useState('');
  // let currentId = props.dishId;

  // let APIUrl = 'https://api.spoonacular.com/recipes/';
  // let key = process.env.REACT_APP_API_KEY;
  // let keyM = process.env.REACT_APP_API_KEY_M;

  // useEffect(() => {
  //   const getCard = async () => {
  //     const card = await axios(APIUrl + `${currentId}/card?&apiKey=${key}`);
  //     console.log(card.data.url);
  //     setCardUrl(card.data.url);
  //   };

  // });

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalComponent"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="recipeModalTitle">
              Here is your full
              <span className="propsTitle">{' ' + props.dishName} </span>recipe
              <br></br>
            </div>
            <hr></hr>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <img
            src={props.cardUrl}
            alt="recipe-card"
            className="recipeCard img-fluid"
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default RecipeModal;
