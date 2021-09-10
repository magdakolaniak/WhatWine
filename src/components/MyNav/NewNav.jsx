import {
  Navbar,
  NavDropdown,
  Container,
  Nav,
  FormControl,
} from 'react-bootstrap';
import './MyNav.css';
import { GiGrapes } from 'react-icons/gi';
import { withRouter } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import glass from './wines.png';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const NewNav = () => {
  const { setQuery, loggedIn, user } = useContext(LoginContext);
  const location = useLocation();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let query = event.currentTarget.value;
      setQuery(event.currentTarget.value);
      console.log(query);
      event.currentTarget.value = '';
    }
  };

  const getClassName = (location) => {
    if (location.pathname === '/wineList') {
      return 'searching-navbar';
    } else return 'searching-navbar-none';
  };

  return (
    <Navbar collapseOnSelect expand="lg" id="my-nav" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="logoText">
            <GiGrapes className="iconNav" />
            WhatWine?
          </span>
          <img src={glass} alt="glass" className="glass"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/wineList">
              Wine List
            </Nav.Link>
            <Nav.Link as={Link} to="/tasteProfiler">
              Taste Profiler
            </Nav.Link>
            <Nav.Item>
              <FormControl
                type="text"
                placeholder="e.g year, grape, country"
                className={getClassName(location)}
                // onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </Nav.Item>
            <Nav.Link as={Link} to="/mealComposer">
              Meal Composer
            </Nav.Link>
          </Nav>
          <Nav>
            {loggedIn ? (
              <NavDropdown
                title={`Welcome, ${user.firstname}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/userProfile">
                  Your account
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link eventKey={2} as={Link} to="/">
                Log in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NewNav);
