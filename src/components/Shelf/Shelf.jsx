import { Container, Row } from 'react-bootstrap';
import './Shelf.css';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Shelf = () => {
  const history = useHistory();
  const BASEUrl = process.env.REACT_APP_API;

  const {
    tasteProfile,
    grapeColor,
    pickedFromBoard,
    setPickedFromBoard,
    setDetailed,
  } = useContext(LoginContext);

  const myFunc = (e) => {
    e.preventDefault();

    let id = e.currentTarget.id;
    const object = pickedFromBoard.filter((wine) => {
      return wine._id === id;
    });
    history.push(`/detail/${id}`);
    console.log(object);
    setDetailed(object);
  };

  useEffect(() => {
    const getWines = async (tasteProfile, grapeColor) => {
      if (grapeColor === 'white') {
        const wines = await axios(
          BASEUrl +
            `?type=${tasteProfile.type},sparkling&character.body=${tasteProfile.body}&character.sweetness=${tasteProfile.sweetness}`
        );

        setPickedFromBoard(wines.data);
      } else {
        const wines = await axios(
          BASEUrl +
            `?type=${tasteProfile.type},sparkling&character.body=${tasteProfile.body}&character.sweetness=${tasteProfile.sweetness}`
        );

        setPickedFromBoard(wines.data);
      }
    };
    getWines(tasteProfile, grapeColor);
  }, []);

  return (
    <>
      <Container className="mainShelf">
        <Row className="mainSingleShelf d-flex">
          <div className="scroll">
            {pickedFromBoard && pickedFromBoard.length >= 1 ? (
              pickedFromBoard.map((bottle) => (
                <img
                  id={bottle._id}
                  key={bottle._id}
                  src={bottle.image}
                  alt="bottle"
                  className="img-fluid bottle"
                  onClick={myFunc}
                />
              ))
            ) : (
              <div className="noContent">
                As our database is still growing, <br></br> we couldn't match
                the exact requested style for you right now.
              </div>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Shelf;
