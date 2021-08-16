import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <img src={logo} className="logo-main" alt="logo" />
      <div className="home-main">
        <Row>
          <Col s={12} xs={12} md={4}>
            <Link to="/wineList">
              <div id="wine-list-circle" className="circle-styling">
                {' '}
                {/* WINE LIST */}
              </div>
            </Link>

            <div></div>
          </Col>
          <Col xs={12} s={12} md={4}>
            <div id="taste-profiler-circle" className="circle-styling">
              {/* TASTE PROFILER */}
            </div>{' '}
          </Col>
          <Col xs={12} md={4}>
            <div id="create-circle" className="circle-styling">
              {/* CREATE */}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
