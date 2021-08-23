import { Card, Row, Col, Container } from 'react-bootstrap';
import wines from './wine.json';
import './CarouselItem.css';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

function CarouselItem() {
  const history = useHistory();
  const { setPickedWine } = useContext(LoginContext);

  function handleClick(e) {
    let id = e.target.id;
    const object = wines.filter((wine) => {
      return wine._id === id;
    });
    history.push(`/detail/${id}`);
    console.log(object);
    setPickedWine(object);
  }
  return (
    <>
      <Container className="scroll-container mb-5 mt-2">
        <Row id="bottleRow" className="flex-row flex-nowrap scroll-container">
          {wines.map((wine) => (
            <div id="singleBottle">
              <img
                id={wine._id}
                src={wine.image}
                className="bottle-size"
                alt="single-bottle"
                onClick={handleClick}
              />
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default CarouselItem;
