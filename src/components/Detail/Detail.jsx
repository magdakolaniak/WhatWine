import './Detail.css';
import { LoginContext } from '../GlobalState/GlobalState';
import { useContext } from 'react';
import { Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { GiGrapes, GiReturnArrow } from 'react-icons/gi';
import { ImLibrary, ImArrowRight } from 'react-icons/im';
import { BsFillHeartFill } from 'react-icons/bs';
import Geocode from 'react-geocode';
import { Link } from 'react-router-dom';
import book from '../../components/assets/images/book.png';
import winery from '../../components/assets/images/winery.png';
import DetailModal from './DetailModal.jsx';
import { useState } from 'react';

import axios from 'axios';
import SuccessModal from './SuccessModal';

const Detail = () => {
  const { detailed, lat, setLat, long, setLong, user } =
    useContext(LoginContext);
  const [detailModalShow, setDetailModalShow] = useState(false);
  const [addedModalShow, setAddedModal] = useState(false);

  const country = detailed[0].origin.country;
  const region = detailed[0].origin.region;
  const mapKey = process.env.REACT_APP_GOOGLE_KEY;

  Geocode.fromAddress(`${region}, ${country}`, `${mapKey}`, 'en').then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLat(lat);
      setLong(lng);
    },
    (error) => {
      console.error(error);
    }
  );
  const handleClick = (e) => {
    let URL = process.env.REACT_APP_BE_URL;
    e.preventDefault();
    let id = e.currentTarget.id;
    console.log(id);
    let button = document.getElementById(id);
    button.style.color = '#800';

    const addWine = async () => {
      try {
        const res = await axios.post(URL + `/user/${user._id}/addToList/${id}`);
        console.log(res.data);
        if (res.status === 200) {
          setAddedModal(true);
          user.wines.push(id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    addWine();
  };

  return (
    <>
      <Container className="cont-main">
        <Link to="/wineList">
          <span className="cornerSignDetail">
            <GiReturnArrow className="narrow" />
            <br></br>
            Go back{' '}
          </span>
        </Link>
        <Row>
          <Col xs={12} md={10} className="mx-auto col-left">
            <div className="img-wrapper container">
              <img
                src={detailed[0].image}
                alt="wine-bottle"
                className="img-fluid img-styling"
              />
            </div>
          </Col>
          <Col xs={10} md={8} className="details-column">
            <Row>
              <div className="grape-wrapper">
                {' '}
                <GiGrapes className="icon1" />
                {detailed[0].grape}
              </div>
              <div className="full-name-wrapper">
                <span>
                  {' '}
                  {detailed[0].fullName}
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Click to add to your list
                      </Tooltip>
                    }
                  >
                    <span
                      className="addToFavWrapper"
                      id={detailed[0]._id}
                      onClick={handleClick}
                    >
                      <BsFillHeartFill style={{ marginBottom: '25px' }} />
                    </span>
                  </OverlayTrigger>
                </span>
              </div>

              <div className="winery">
                {' '}
                <ImLibrary className="winery-icon" />
                {detailed[0].winery}
              </div>
              <br></br>
              <hr className="horizontalLine"></hr>
            </Row>
            <Row>
              <Col md={6}>
                <span>
                  <span className="description-wrapper">
                    <span>YEAR</span>
                    <br></br>
                  </span>
                  <span>{detailed[0].year}</span>
                </span>
                <div
                  className="description-wrapper"
                  style={{ paddingBottom: '4px', paddingTop: '4px' }}
                >
                  CHARACTER
                </div>
                <Row>
                  <Col xs={6} md={6}>
                    <div style={{ paddingBottom: '4px' }}>Style</div>
                    <div style={{ paddingBottom: '4px' }}>Alcohol level:</div>
                    <div style={{ paddingBottom: '4px' }}>Body style:</div>
                    <div style={{ paddingBottom: '4px' }}>
                      Level of acidity:
                    </div>
                  </Col>
                  <Col xs={6} md={6}>
                    <div style={{ paddingBottom: '4px' }}>
                      {detailed[0].character.sweetness}
                    </div>
                    <div style={{ paddingBottom: '4px' }}>
                      {detailed[0].character.alcohol}
                    </div>
                    <div style={{ paddingBottom: '4px' }}>
                      {detailed[0].character.body}
                    </div>
                    <div style={{ paddingBottom: '10px' }}>
                      {detailed[0].character.acidity}
                    </div>
                  </Col>{' '}
                  <Row style={{ marginTop: '10px' }}>
                    <Col xs={6} md={6}>
                      <div style={{ paddingTop: '10px', fontWeight: 'bolder' }}>
                        WEBSITE
                        <ImArrowRight className="fingerIcon" />
                      </div>
                      <div style={{ paddingTop: '30px', fontWeight: 'bolder' }}>
                        DETAILS <ImArrowRight className="fingerIcon" />
                      </div>
                    </Col>

                    <Col xs={6} md={6}>
                      <div>
                        <a href={detailed[0].link}>
                          <img
                            src={winery}
                            style={{
                              height: '40px',
                              paddingBottom: 'px',
                              marginBottom: '10px',
                              cursor: 'pointer',
                            }}
                            alt="website"
                          />
                        </a>
                      </div>
                      <div>
                        <img
                          src={book}
                          style={{
                            height: '40px',
                            paddingBottom: 'px',
                            marginTop: '10px',
                            cursor: 'pointer',
                          }}
                          alt="website"
                          onClick={() => setDetailModalShow(true)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Row>
              </Col>
              <Col s={12} md={6}>
                <span className="description-wrapper">
                  <div>ORIGIN</div>

                  <div>Country</div>
                </span>
                <div>{detailed[0].origin.country}</div>

                <div className="description-wrapper">
                  <span>Region</span>
                </div>
                <span>{detailed[0].origin.region}</span>

                <div className="map-wrapper">
                  <img
                    src={`https://maps.googleapis.com/maps/api/staticmap?zoom=3&size=200x200&markers=icon:https://res.cloudinary.com/dii3cculv/image/upload/v1629457367/favicon-32x32_tgrwgq.png|${lat},${long}&key=${mapKey}&map_id=8c7807d77bef73b2`}
                    alt="map"
                    className="map-styling img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <SuccessModal
          show={addedModalShow}
          onHide={() => setAddedModal(false)}
          added={'wine'}
        />
        <DetailModal
          show={detailModalShow}
          onHide={() => setDetailModalShow(false)}
          details={detailed[0].description}
          winery={detailed[0].winery}
        />
      </Container>
    </>
  );
};
export default Detail;
