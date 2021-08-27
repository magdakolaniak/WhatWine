import './MyNav.css';
import { Nav, Navbar, FormControl, Dropdown, Form } from 'react-bootstrap';
import { GiGrapes } from 'react-icons/gi';
import glass from './wines.png';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => {
  const { setQuery } = useContext(LoginContext);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let query = event.currentTarget.value;
      setQuery(event.currentTarget.value);
      console.log(query);
      event.currentTarget.value = '';
    }
  };
  return (
    <>
      <Navbar id="my-nav" variant="dark" expand="lg">
        <div>
          <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <span className="logoText">
                  <GiGrapes className="iconNav" />
                  WhatWine?
                </span>
              </Link>
              <img src={glass} alt="glass" className="glass"></img>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/wineList" className="link-text">
                WINE LIST
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/tasteProfiler"
                eventKey="link-1"
                className="link-text"
              >
                TASTE PROFILER
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <FormControl
                type="text"
                placeholder="e.g year, grape, country"
                className="searching-navbar"
                // onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                className="link-text"
                href="/mealComposer"
              >
                MEAL COMPOSER
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
export default MyNav;
