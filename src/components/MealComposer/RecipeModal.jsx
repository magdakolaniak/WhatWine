import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Modals.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { LoginContext } from '../GlobalState/GlobalState';
import SuccessModal from '../Detail/SuccessModal';

const RecipeModal = (props) => {
  const { user, setUser } = useContext(LoginContext);
  const [cardUrl, setCardUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  let APIUrl = 'https://api.spoonacular.com/recipes/';
  let key = process.env.REACT_APP_API_KEY_M;
  let URL = process.env.REACT_APP_BE_URL;

  useEffect(() => {
    const getCard = async () => {
      const response = await axios(
        APIUrl + `${props.recipe}/card?&apiKey=${key}`
      );
      if (response.status === 200) {
        setCardUrl(response.data.url);
        setIsLoading(false);
      }
    };
    if (props.recipe) {
      setIsLoading(true);

      getCard();
    }
  }, [props.recipe]);

  const addRecipe = async (e) => {
    e.preventDefault();
    let icon = document.getElementById('recipeAddHeart');
    icon.style.color = '#800';

    try {
      const resp = await axios.post(URL + `/user/${user._id}/addRecipe`, {
        fullName: props.dish,
        url: cardUrl,
      });
      if (resp.status === 200) {
        setShowModal(true);
        setUser(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalComponent"
        id="recipeModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="recipeModalTitle">
              Here is your full &nbsp;
              <span className="propsTitle">{props.dish} &nbsp;</span>
              recipe
              {user._id && user._id.length > 0 ? (
                <OverlayTrigger
                  key="right"
                  placement="right"
                  overlay={<Tooltip id="tooltip-right">Click to save</Tooltip>}
                >
                  <span style={{ paddingLeft: '30px' }}>
                    <BsFillHeartFill
                      id="recipeAddHeart"
                      onClick={addRecipe}
                      className="addToRecipe"
                    />
                  </span>
                </OverlayTrigger>
              ) : (
                ''
              )}
              <br></br>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBodyRecipe">
          {isLoading === true ? (
            <>
              <div> Hang on, we're getting your recipe!</div>
              <div
                className="dotsLoadingRecipe"
                style={{ display: 'inline-block' }}
              >
                <br></br>
                <div className="loading">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </>
          ) : (
            <img
              src={cardUrl}
              alt="recipe-card"
              className="recipeCard img-fluid"
            />
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <SuccessModal
        show={showModal}
        onHide={() => setShowModal(false)}
        added={'recipe'}
      />
    </>
  );
};
export default RecipeModal;
