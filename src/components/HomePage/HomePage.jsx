import { Row, Col, Container } from 'react-bootstrap';
import './HomePage.css';
import { GiGrapes } from 'react-icons/gi';
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState';

import { Link } from 'react-router-dom';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(LoginContext);

  function play() {
    let background = document.getElementById('myVideo');
    let mainDiv = document.getElementById('myNewId');
    mainDiv.style.backgroundColor = 'transparent';
    console.log(background);
    if (background.readyState === 4) {
      setLoading(false);

      background.style.display = 'inline';
      background.play();
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      play();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <video loop muted id="myVideo" style={{ display: 'none' }}>
        <source
          src="https://res.cloudinary.com/dii3cculv/video/upload/v1631645972/movie_sycszk.mp4"
          type="video/mp4"
        />
      </video>
      <Container className="home-main" id="myNewId" fluid>
        {loading ? (
          <>
            <span className="loadingWrapper">
              <div
                className="loadingText"
                style={{ fontSize: '18px', fontWeight: 'bolder' }}
              >
                {' '}
                {user && user.firstname ? (
                  <>
                    <span> Welcome back </span>
                    {user.firstname}!
                  </>
                ) : (
                  'We are setting you up!'
                )}
              </div>
              <div className="dotsLoadingHome">
                <div className="loadingHome mb-4">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </span>
          </>
        ) : (
          <>
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
                  <div
                    id="wine-list-circle"
                    className="circle-styling-list"
                  ></div>
                  <span className="middleList">Wine List</span>
                </Link>
              </Col>
              <Col xs={12} md={4}>
                <Link to="/tasteProfiler">
                  <div
                    id="taste-profiler-circle"
                    className="circle-styling"
                  ></div>
                  <span className="middle">Taste profiler</span>
                </Link>
              </Col>
              <Col xs={12} md={4}>
                <Link to="/mealComposer">
                  <div id="create-circle" className="circle-styling-meal"></div>
                  <span className="middleMeal">Dish Section</span>
                </Link>
              </Col>
            </Row>{' '}
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
