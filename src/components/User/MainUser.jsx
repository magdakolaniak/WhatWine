import './Styles/MainUser.css';
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import Weather from './Weather';
import { useEffect, useContext, useState } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import axios from 'axios';
import { IoMdHeartDislike } from 'react-icons/io';
import NewsCarousel from './NewsCarousel';

const MainUser = () => {
  const { user, setUser, setUserWines, userWines, news, setWeather, weather } =
    useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  let URL = process.env.REACT_APP_BE_URL;
  const removeWine = async (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;

    try {
      const res = await axios.put(
        URL + `/user/${user._id}/removeFromList/${id}`
      );

      if (res.status === 200) {
        const list = userWines;

        const newList = list.filter(
          (element) => element._id.toString() !== id.toString()
        );

        setUserWines(newList);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeRecipe = async (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;

    try {
      const res = await axios.put(URL + `/user/${user._id}/removeRecipe/${id}`);

      if (res.status === 200) {
        setUser(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getUserWeather = async () => {
      try {
        const api = process.env.REACT_APP_WEATHER;
        const data = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${user.city}&appid=${api}`
        );
        console.log(data);
        if (data.status === 200) {
          setWeather(data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getWines = async () => {
      try {
        const data = await axios(URL + `/user/${user._id}/wines`);

        setUserWines(data.data.wines);
      } catch (error) {
        console.log('HAPPENING HERE', error.message);
      }
    };
    getWines();
    getUserWeather();
  }, [userWines.length, user.recipes.length, user.city]);

  const count = (type) => {
    let filtered = userWines.filter((el) => el.type === `${type}`);
    return filtered.length;
  };

  count('red');

  return (
    <>
      <Container>
        <Row className="mainBoardUser d-flex">
          {!loading ? (
            <Col md={12}>
              <Weather />
            </Col>
          ) : (
            <Col md={12} className="weatherEmpty">
              <div className="weatherEmpty">
                We're checking what's the weather like today in {user.city}!
                <div className="dotsLoadingUserCard">
                  <div className="loadingUserCard">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <br></br>
            </Col>
          )}
        </Row>

        <Row>
          <Col md={12} className="mainBoardUser">
            <Tabs id="uncontrolled-tab-example" className="mb-3">
              <Tab
                eventKey="sparkling"
                title={`Sparkling [${count('sparkling')}] `}
              >
                {count('sparkling') === 0 ? (
                  <div className="emptyTable">
                    {' '}
                    Check our wine list and add something here!
                  </div>
                ) : (
                  <table>
                    <tbody className="fade-in-top">
                      <tr>
                        <th style={{ width: '70px' }}> Country</th>
                        <th style={{ width: '60px' }}> Year</th>
                        <th style={{ width: '400px' }}>Label</th>
                        <th style={{ width: '150px' }}> Winery</th>
                        <th style={{ width: '100px' }}> Action</th>
                      </tr>
                      {userWines
                        .filter((el) => el.type === 'sparkling')
                        .map((wine, i) => (
                          <tr key={i} id="sparkling">
                            <td>{wine.origin.country}</td>
                            <td>{wine.year}</td>
                            <td>{wine.fullName}</td>
                            <td>{wine.winery}</td>
                            <td>
                              <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-top">
                                    Remove from your list
                                  </Tooltip>
                                }
                              >
                                <span id={wine._id} onClick={removeWine}>
                                  <IoMdHeartDislike className="removeIcon" />
                                </span>
                              </OverlayTrigger>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </Tab>
              <Tab eventKey="white" title={`White [${count('white')}] `}>
                {count('white') === 0 ? (
                  <div className="emptyTable">
                    Check our wine list and add something here!
                  </div>
                ) : (
                  <table>
                    <tbody className="fade-in-top">
                      <tr>
                        <th style={{ width: '70px' }}> Country</th>
                        <th style={{ width: '60px' }}> Year</th>
                        <th style={{ width: '400px' }}>Label</th>
                        <th style={{ width: '150px' }}> Winery</th>
                      </tr>
                      {userWines
                        .filter((el) => el.type === 'white')
                        .map((wine, i) => (
                          <tr key={i}>
                            <td>{wine.origin.country}</td>
                            <td>{wine.year}</td>
                            <td>{wine.fullName}</td>
                            <td>{wine.winery}</td>
                            <td>
                              <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-top">
                                    Remove from your list
                                  </Tooltip>
                                }
                              >
                                <span id={wine._id} onClick={removeWine}>
                                  <IoMdHeartDislike className="removeIcon" />
                                </span>
                              </OverlayTrigger>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </Tab>
              <Tab eventKey="red" title={`Red [${count('red')}] `}>
                {count('red') === 0 ? (
                  <div className="emptyTable">
                    {' '}
                    Check our wine list and add something here!
                  </div>
                ) : (
                  <table>
                    <tbody className="fade-in-top">
                      <tr>
                        <th style={{ width: '70px' }}> Country</th>
                        <th style={{ width: '60px' }}> Year</th>
                        <th style={{ width: '400px' }}>Label</th>
                        <th style={{ width: '150px' }}> Winery</th>
                      </tr>
                      {userWines
                        .filter((el) => el.type === 'red')
                        .map((wine, i) => (
                          <tr key={i}>
                            <td>{wine.origin.country}</td>
                            <td>{wine.year}</td>
                            <td>{wine.fullName}</td>
                            <td>{wine.winery}</td>
                            <td>
                              <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-top">
                                    Remove from your list
                                  </Tooltip>
                                }
                              >
                                <span id={wine._id} onClick={removeWine}>
                                  <IoMdHeartDislike className="removeIcon" />
                                </span>
                              </OverlayTrigger>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </Tab>
              <Tab
                eventKey="recipes"
                title={`Saved recipes [${user.recipes.length}] `}
              >
                {user.recipes.length === 0 ? (
                  <div className="emptyTable">
                    {' '}
                    Your saved recipes will show up here!
                  </div>
                ) : (
                  <Row className="fade-in-top">
                    {user.recipes.map((recipe) => (
                      <Col
                        xs={12}
                        s={6}
                        md={4}
                        className="recipeCol"
                        key={recipe._id}
                      >
                        <div className="recipeWrapper">
                          {' '}
                          <span
                            id={recipe._id}
                            style={{ width: '150px' }}
                            className="recipeName"
                            onClick={removeRecipe}
                          >
                            {recipe.fullName}
                          </span>
                          <img
                            src={recipe.url}
                            alt="recipe-img"
                            className="imageRecipe img-fluid"
                            style={{
                              width: '80px',
                              height: '100px',
                              cursor: 'pointer',
                              paddingLeft: '10px',
                              marginBottom: '20px',
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(`${recipe.url}`, '_blank');
                            }}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}
              </Tab>
            </Tabs>
          </Col>{' '}
        </Row>
        <Row>
          <Col md={12} className="newsHeader">
            <div className="header">Read some news from wine world!</div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '60px' }}>
          {news && news.length > 0 ? (
            <NewsCarousel />
          ) : (
            <div>News will show up here </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default MainUser;
