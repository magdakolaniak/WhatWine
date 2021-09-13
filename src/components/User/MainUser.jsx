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
import { useEffect, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import axios from 'axios';
import { IoMdHeartDislike } from 'react-icons/io';
import NewsCarousel from './NewsCarousel';

const MainUser = () => {
  const { user, setUserWines, userWines } = useContext(LoginContext);

  const removeWine = async (e) => {
    let URL = process.env.REACT_APP_BE_URL;
    e.preventDefault();
    let id = e.currentTarget.id;
    console.log(id);

    try {
      const res = await axios.put(
        URL + `/user/${user._id}/removeFromList/${id}`
      );

      if (res.status === 200) {
        const list = userWines;
        console.log('UserWineBefore', userWines);
        const newList = list.filter(
          (element) => element._id.toString() !== id.toString()
        );

        setUserWines(newList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const URL = 'http://localhost:3001/user/';

    const getWines = async () => {
      try {
        const data = await axios(URL + `${user._id}/wines`);

        setUserWines(data.data.wines);
      } catch (error) {
        console.log('HAPPENING HERE', error.message);
      }
    };
    getWines();

    console.log('USER WINES', userWines.length);
  }, [userWines.length, user.recipes.length]);

  const count = (type) => {
    let filtered = userWines.filter((el) => el.type === `${type}`);
    return filtered.length;
  };

  count('red');
  return (
    <>
      <Container>
        <Row className="mainBoardUser d-flex">
          <Col md={12}>
            <Weather />
          </Col>
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
                    <tr>
                      <th style={{ width: '70px' }}> Country</th>
                      <th style={{ width: '60px' }}> Year</th>
                      <th style={{ width: '400px' }}>Label</th>
                      <th style={{ width: '150px' }}> Winery</th>
                      <th style={{ width: '100px' }}> Action</th>
                    </tr>
                    {userWines
                      .filter((el) => el.type === 'sparkling')
                      .map((wine) => (
                        <>
                          <tr>
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
                        </>
                      ))}
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
                    <tr>
                      <th style={{ width: '70px' }}> Country</th>
                      <th style={{ width: '60px' }}> Year</th>
                      <th style={{ width: '400px' }}>Label</th>
                      <th style={{ width: '150px' }}> Winery</th>
                    </tr>
                    {userWines
                      .filter((el) => el.type === 'white')
                      .map((wine) => (
                        <>
                          <tr>
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
                        </>
                      ))}
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
                    <tr>
                      <th style={{ width: '70px' }}> Country</th>
                      <th style={{ width: '60px' }}> Year</th>
                      <th style={{ width: '400px' }}>Label</th>
                      <th style={{ width: '150px' }}> Winery</th>
                    </tr>
                    {userWines
                      .filter((el) => el.type === 'red')
                      .map((wine) => (
                        <>
                          <tr>
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
                        </>
                      ))}
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
                  <Row>
                    {user.recipes.map((recipe) => (
                      <Col xs={12} s={6} md={4} className="recipeCol">
                        <div className="recipeWrapper">
                          {' '}
                          <span>{recipe.fullName}</span>
                          <img
                            src={recipe.url}
                            alt="recipe-img"
                            className="imageRecipe img-fluid"
                            style={{
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
                        {/* <span
                          style={{
                            marginLeft: '10px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                          }}
                        >
                          {recipe.fullName}
                        </span> */}
                      </Col>
                    ))}
                  </Row>
                )}
              </Tab>
            </Tabs>
          </Col>{' '}
        </Row>
        <Row>
          <Col md={12} className="mainBoardUser">
            <h5
              style={{
                padding: '10px',
                marginLeft: '180px',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              Read latest news from wine world!
            </h5>
          </Col>
        </Row>
        <Row style={{ marginBottom: '60px' }}>
          <NewsCarousel />
        </Row>
      </Container>
    </>
  );
};

export default MainUser;
