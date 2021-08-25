import './TasteProfiler.css';
import { Row, Col } from 'react-bootstrap';
import TasteBoard from '../TasteBoard/TasteBoard';
import Shelf from '../Shelf/Shelf.jsx';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';
import { GiGrapes, GiReturnArrow } from 'react-icons/gi';

const TasteProfiler = () => {
  const {
    grapeColor,
    setGrapeColor,
    tasteProfile,
    setTasteProfile,
    pickedFromBoard,
    setPickedFromBoard,
  } = useContext(LoginContext);
  const handleArrowBack = () => {
    if (tasteProfile.body.length > 1) {
      setTasteProfile({ sweetness: '', body: '' });
      setPickedFromBoard({});
    } else {
      setGrapeColor('');
      setPickedFromBoard({});
    }
  };
  let description = '';
  const styleDescription = (tasteProfile) => {
    if (tasteProfile.body === 'medDry') {
      description = 'medium bodied, dry wine with high level of acidity';
    } else {
      description = 'something to think of later on';
    }
    return description;
  };
  const grapeClick = (e) => {
    e.preventDefault();
    setGrapeColor(e.currentTarget.id);
  };
  return (
    <>
      {grapeColor.length === 0 ? (
        <div className="welcomePage">
          <Row>
            <Col xs={12} md={12}>
              <div className="writingText">
                <h1 id="mainText">TASTE PROFILER</h1>
                <h1 id="reflection">TASTE PROFILER</h1>
              </div>
            </Col>
          </Row>
          <Row className="buttons">
            <Col xs={6} md={6}>
              <div className="pickWhiteWrapper">
                <GiGrapes
                  className="pickWhite"
                  id="white"
                  onClick={grapeClick}
                />
              </div>
            </Col>
            <Col xs={6} md={6}>
              <div className="pickRedWrapper">
                <GiGrapes className="pickRed" id="red" onClick={grapeClick} />
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <Row id="taste-main">
          <span className="cornerSign" onClick={handleArrowBack}>
            <GiReturnArrow className="narrow" />
            <br></br>
            RETURN{' '}
          </span>
          <Col xs={12} md={4}>
            <div className="box1 slide-in-left">
              <div className="title">
                <span className="tasteText">TASTE</span> <br></br>{' '}
                <span className="profilerTextWrapper">PROFILER</span>
              </div>
              <br></br>
              <div className="infoDesc">
                {pickedFromBoard.length > 0 ? (
                  <div>YOUR WINE IS THIS </div>
                ) : tasteProfile.body.length < 1 ? (
                  <div>Click to the div </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} className="boardMain">
            {tasteProfile && tasteProfile.body.length > 1 ? (
              <Shelf />
            ) : (
              <TasteBoard />
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

export default TasteProfiler;
