import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
import { GiGrapes } from 'react-icons/gi';

import { Link } from 'react-router-dom';
import video from './movie.mp4';

const HomePage = () => {
  let text = '{ Your personal Sommelier }';
  // const BASEUrl = process.env.REACT_APP_API;
  // const { setMainData } = useContext(LoginContext);

  // const mainDataWines = async () => {
  //   let data = await axios(BASEUrl + `/`);
  //   setMainData(data.data);
  // };
  // mainDataWines();
  return (
    <>
      <video autoPlay loop muted id="myVideo">
        <source src={video} type="video/mp4" />
      </video>

      <div className="home-main">
        <Row>
          <Col xs={12} className="colLogoHome">
            <div className="loginTitleHome">
              <span className="logoTitleHome">
                <GiGrapes className="loginIcon" />
                WhatWine?
              </span>
              <span className="underTextWrapper">
                <p className="underText anim-typewriter"> {text}</p>
              </span>
            </div>
          </Col>
          <Col xs={4}>
            <Link to="/wineList">
              <div id="wine-list-circle" className="circle-styling-list"></div>
              <span className="middleList">Wine List</span>
            </Link>
          </Col>
          <Col xs={4}>
            <Link to="/tasteProfiler">
              <div id="taste-profiler-circle" className="circle-styling"></div>
              <span className="middle">Taste profiler</span>
            </Link>
          </Col>
          <Col xs={4}>
            <Link to="/mealComposer">
              <div id="create-circle" className="circle-styling-meal"></div>
              <span className="middleMeal">Dish Section</span>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
