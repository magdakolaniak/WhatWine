import './Styles/Weather.css';
import { Container, Row, Col } from 'react-bootstrap';
import celsius from './helper/index.js';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { BsDropletHalf } from 'react-icons/bs';
import { CgArrowsMergeAltV } from 'react-icons/cg';

import { useContext } from 'react';

import { LoginContext } from '../GlobalState/GlobalState.jsx';

const Weather = () => {
  const { weather } = useContext(LoginContext);

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <Row>
              <Col xs={6} md={6}>
                <div className="city">{weather.name}</div>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="weather"
                  className="weather-icon"
                />
                <span className="main-temp">{celsius(weather.main.temp)}°</span>
                <div className="sky-description">
                  {weather.weather[0].description}
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className="city">
                  Feels like {celsius(weather.main.feels_like)}°
                </div>

                <span>
                  <ImArrowUp className="weather-icons" />{' '}
                  <span className="deg">{celsius(weather.main.temp_max)}°</span>
                </span>
                <span>
                  {' '}
                  <ImArrowDown className="weather-icons" />{' '}
                  <span className="deg">
                    {celsius(weather.main.temp_min)}°{' '}
                  </span>
                </span>
                <div className="main-features">
                  <span>
                    {' '}
                    <BsDropletHalf className="weather-icons" />{' '}
                    <span className="results">{weather.main.humidity} %</span>
                  </span>
                </div>
                <div className="main-features">
                  <span>
                    {' '}
                    <CgArrowsMergeAltV className="weather-icons" />{' '}
                    <span className="results">
                      {weather.main.pressure} hPa{' '}
                    </span>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={6} className="weatherReccom">
            <div>Looks like is the perfect weather for a glass of </div>

            <div>wine here</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Weather;
