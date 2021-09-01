import './Detail.css';
import { LoginContext } from '../GlobalState/GlobalState';
import { useContext } from 'react';
import { Col, Container } from 'react-bootstrap';
import { GiGrapes, GiReturnArrow } from 'react-icons/gi';
import { FcCheckmark } from 'react-icons/fc';
import { ImLibrary } from 'react-icons/im';
import { ImBookmark } from 'react-icons/im';
import Geocode from 'react-geocode';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Detail = () => {
  const { detailed, lat, setLat, long, setLong } = useContext(LoginContext);
  const [saved, setSaved] = useState(false);

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
  const addToFav = () => {
    setSaved(true);
  };
  return (
    <>
      <div className="detail-main-comp">
        <Link to="/wineList">
          <span className="cornerSignDetail">
            <GiReturnArrow className="narrow" />
            <br></br>
            Go back{' '}
          </span>
        </Link>
        <Container className="cont-main">
          {/* <Row className="row-detail"> */}
          <Col xs={2} md={4} className="mx-auto col-left">
            <div className="img-wrapper container">
              <img
                src={detailed[0].image}
                alt="wine-bottle"
                className="img-fluid img-styling"
              />
            </div>
          </Col>
          <Col xs={10} md={8} className="details-column">
            {/* <span className="bookmarkWrapper" onClick={addToFav}>
              <span className="saveDetailed">
                {saved === false ? (
                  'Save'
                ) : (
                  <FcCheckmark className="checkedIcon" />
                )}
              </span>
              <ImBookmark className="bookmarkDetail" />
            </span> */}
            <div className="grape-wrapper">
              {' '}
              <GiGrapes className="icon1" />
              {detailed[0].grape}
            </div>
            <div className="full-name-wrapper">
              <span> {detailed[0].fullName}</span>
            </div>
            <div className="winery">
              {' '}
              <ImLibrary className="winery-icon" />
              {detailed[0].winery}
            </div>
            <span className="right-el">
              <span className="description-wrapper">
                <span>ORIGIN</span>
                <br></br>

                <span>Country</span>
                <br></br>
              </span>
              <span>{detailed[0].origin.country}</span>
              <br></br>
              <span className="description-wrapper">
                <span>Region</span>
                <br></br>
              </span>
              <span>{detailed[0].origin.region}</span>
              <div className="map-wrapper">
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?zoom=5&size=200x200&markers=icon:https://res.cloudinary.com/dii3cculv/image/upload/v1629457367/favicon-32x32_tgrwgq.png|${lat},${long}&key=${mapKey}&map_id=8c7807d77bef73b2`}
                  alt="map"
                  className="map-styling img-fluid"
                />
              </div>
            </span>

            <span>
              <span className="description-wrapper">
                <span>YEAR</span>
                <br></br>
              </span>
              <span>{detailed[0].year}</span>
            </span>

            <div className="description-wrapper">
              <span>FLAVOURS</span>
            </div>
            {/* {detailed[0].flavours.map((flav) => (
              <li>{flav}</li>
            ))} */}
          </Col>
          <br></br>

          {/* </Row> */}
        </Container>
      </div>
    </>
  );
};
export default Detail;
