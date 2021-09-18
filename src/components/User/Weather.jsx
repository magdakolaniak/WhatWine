import './Styles/Weather.css';
import { Container, Row, Col } from 'react-bootstrap';
import celsius from './helper/index.js';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { BsDropletHalf } from 'react-icons/bs';
import { CgArrowsMergeAltV } from 'react-icons/cg';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import MyClock from './MyClock';

const Weather = () => {
  const { user, weather, mainData } = useContext(LoginContext);
  const [calendar, setCalendar] = useState([]);

  const wineOfTheDay = () => {
    let temp = celsius(weather.main.temp);

    if (temp > 0 && temp <= 10) {
      let description = 'Full bodied red wine';
      let picked = mainData.filter(
        (wine) => wine.type === 'red' && wine.character.body === 'full'
      );
      return [description, picked];
    }
    if (temp >= 11 && temp <= 16) {
      let description = 'Medium bodied red wine';
      let picked = mainData.filter(
        (wine) => wine.type === 'red' && wine.character.body === 'medium plus'
      );
      return [description, picked];
    }
    if (temp > 16 && temp < 21) {
      let description = 'Light red wine or bold white wine';
      let pickedRed = mainData.filter(
        (wine) => wine.type === 'red' && wine.character.body === 'medium minus'
      );
      let pickedWhite = mainData.filter(
        (wine) =>
          wine.type === 'white' && wine.character.body === 'medium minus'
      );
      return [description, [...pickedRed, ...pickedWhite]];
    }
    if (temp >= 21 && temp <= 25) {
      let description = 'Light and fresh white wine';
      let picked = mainData.filter(
        (wine) =>
          wine.type === 'white' && wine.character.body === 'medium minus'
      );
      return [description, [...picked]];
    }
    if (temp > 25) {
      let description = 'Refreshing bubbles!';
      let picked = mainData.filter((wine) => wine.type === 'sparkling');
      return [description, picked];
    }
  };

  let picked = wineOfTheDay();
  console.log('PICKED ARE HERE', picked);

  useEffect(() => {
    const getDay = () => {
      let months = [
        'January',
        ' February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];

      let newDate = new Date();

      let calendarDay = newDate.getDate();
      let month = newDate.getMonth();
      let weekDay = newDate.getDay();

      let display = [calendarDay, months[month], days[weekDay - 1]];
      setCalendar(display);
    };

    getDay();
  }, [user.city]);

  const showPicked = () => {
    let content = document.getElementById('collapse');
    let button = document.getElementById('showHideWine');
    if (content.style.display === 'block') {
      // content.classList.replace('fade-in-top', 'fade-out-top')
      // content.classList.add('fade-out-top');
      content.style.display = 'none';
      button.innerText = 'Show';
    } else {
      content.style.display = 'block';
      button.innerText = 'Hide';
    }
  };

  return (
    <>
      <Container>
        {weather && weather.name && weather.main.temp ? (
          <>
            <Row className="mt-3">
              <Col xs={6} className="weatherReccom">
                <Row>
                  <Col xs={6} style={{ paddingTop: '10px' }}>
                    {' '}
                    <MyClock />
                  </Col>
                  <Col xs={6} className="calendarColumn">
                    <div>
                      <span className="dayWrapper"> {calendar[0]}</span>
                      <span className="monthWrapper"> {calendar[1]}</span>
                    </div>
                    <div></div>
                    <div>{calendar[2]}</div>{' '}
                  </Col>
                </Row>
              </Col>

              <Col xs={6} className="calendarColumn">
                <Row>
                  <Col xs={6} md={6}>
                    <div className="mainCity">{weather.name}</div>
                    <img
                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="weather"
                      className="weather-icon"
                    />
                    <span className="main-temp">
                      {celsius(weather.main.temp)}°
                    </span>
                    <div className="sky-description">
                      {weather.weather[0].description}
                    </div>
                  </Col>
                  <Col xs={6} md={6}>
                    <div className="feelsLike">
                      Feels like {celsius(weather.main.feels_like)}°
                    </div>

                    <span>
                      <ImArrowUp className="weather-icons" />{' '}
                      <span className="deg">
                        {celsius(weather.main.temp_max)}°
                      </span>
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
                        <span className="results">
                          {weather.main.humidity} %
                        </span>
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
            </Row>
            <Row>
              <Col md={12} className="wineOfTheDay">
                {' '}
                <div className="pickedWrapper">
                  Looks like this afternoon will be the perfect weather for a
                  glass of...
                </div>
                <div style={{ padding: '10px' }}>
                  <span id="wineOfTheDayDesc">"{picked[0]}" </span>
                  <span id="showHideWine" onClick={showPicked}>
                    Show
                  </span>
                </div>
                <div
                  id="collapse"
                  style={{ padding: '10px', display: 'none' }}
                  className="fade-in-top"
                >
                  {picked[1].map((wine) => (
                    <span style={{ padding: '20px' }}>
                      <img
                        src={wine.image}
                        style={{
                          height: '150px',
                          filter:
                            'drop-shadow(8px 5px 8px rgba(0, 0, 0, 0.468)',
                          cursor: 'pointer',
                        }}
                        alt="reccom"
                      />
                    </span>
                  ))}
                  {/* {picked[1][1].map((wine) => (
                <span style={{ padding: '20px' }}>
                  <img
                    src={wine.image}
                    style={{
                      height: '150px',
                      filter: 'drop-shadow(8px -2px 2px rgba(0, 0, 0, 0.468)',
                      cursor: 'pointer',
                    }}
                    alt="reccom"
                  />
                </span>
              ))} */}
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <div>Please provide valid name city to get wetaher reccom</div>
        )}
      </Container>
    </>
  );
};

export default Weather;
