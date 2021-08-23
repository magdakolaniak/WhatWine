import './TasteProfiler.css';
import { Row, Col } from 'react-bootstrap';
import TasteBoard from '../TasteBoard/TasteBoard';
import Shelf from '../Shelf/Shelf.jsx';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const TasteProfiler = () => {
  const { taste } = useContext(LoginContext);

  return (
    <>
      <Row id="taste-main">
        <Col xs={12} md={4}>
          <div className="box1 slide-in-left">
            <div className="title">
              <span className="tasteText">TASTE</span> <br></br>{' '}
              <span className="profilerTextWrapper">PROFILER</span>
            </div>
            <br></br>
            <div className="infoDesc">
              {taste && taste.length > 3
                ? 'Here you can find our picks for you'
                : 'Listen to your taste buds and click the corresponding zone on the grid. We will find that flavour fit for you'}
            </div>
          </div>
        </Col>
        <Col xs={12} md={8} className="boardMain">
          {taste && taste.length > 3 ? <Shelf /> : <TasteBoard />}
        </Col>
      </Row>
    </>
  );
};

export default TasteProfiler;
