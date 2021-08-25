import { Container, Row } from 'react-bootstrap';
import './Shelf.css';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Shelf = () => {
  const BASEUrl = process.env.REACT_APP_API;

  const { tasteProfile, grapeColor, pickedFromBoard, setPickedFromBoard } =
    useContext(LoginContext);

  useEffect(() => {
    const getWines = async (tasteProfile, grapeColor) => {
      const wines = await axios(
        BASEUrl +
          `?type=${grapeColor}&character.body=${tasteProfile.body}&character.sweetness=${tasteProfile.sweetness}`
      );

      setPickedFromBoard(wines.data);
      console.log(wines.data);
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
                  key={bottle._id}
                  src={bottle.image}
                  alt="bottle"
                  className="img-fluid bottle"
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
