import { Row, Col, Container } from 'react-bootstrap';
import './HomePage.css';
import { GiGrapes } from 'react-icons/gi';

import { Link } from 'react-router-dom';

const HomePage = () => {
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
        <source
          src="https://res.cloudinary.com/dii3cculv/video/upload/v1631645972/movie_sycszk.mp4"
          type="video/mp4"
        />
      </video>

      <Container className="home-main" fluid>
        <Row className="home-main-row">
          <Col xs={12} md={12} className="colLogoHome">
            <div className="loginTitleHome">
              <span className="logoTitleHome">
                <GiGrapes className="loginIcon" />
                WhatWine?
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Link to="/wineList">
              <div id="wine-list-circle" className="circle-styling-list"></div>
              <span className="middleList">Wine List</span>
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/tasteProfiler">
              <div id="taste-profiler-circle" className="circle-styling"></div>
              <span className="middle">Taste profiler</span>
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/mealComposer">
              <div id="create-circle" className="circle-styling-meal"></div>
              <span className="middleMeal">Dish Section</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
