import './MyNav.css';
import { Nav, Navbar, FormControl, Dropdown, Form } from 'react-bootstrap';
import logo from './newlogo.jpg';
import glass from './wines.png';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
    <>
      <Navbar id="my-nav" variant="dark" expand="lg">
        <div>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <img src={logo} className="logo" alt="logo" />
              <img src={glass} alt="glass" className="glass"></img>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className="link-text">
                WINE LIST
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                // href="/tasteProfiler"
                eventKey="link-1"
                className="link-text"
              >
                TASTE PROFILER
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <FormControl
                type="text"
                placeholder=""
                className="searching-navbar"
              />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="link-text">
                SAVED
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>
      <Dropdown className="dropdown-style">
        <Dropdown.Toggle id="dropdown-button" className="dropdown-style">
          SHOW FILTERS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="dropdown-menu-style">
            <span className="menu-label">Select style</span> <br></br>
            <span className="wrapper">
              {' '}
              <Form.Check
                type="checkbox"
                label="red"
                value="1"
                className="radio-check"
              />
            </span>
            <span className="wrapper">
              <Form.Check
                type="checkbox"
                label="white"
                value="1"
                className="radio-check "
              />
            </span>
            <span className="wrapper">
              {' '}
              <Form.Check
                type="checkbox"
                label="sweet"
                value="1"
                className="radio-check"
              />
            </span>
            <Form.Check
              type="checkbox"
              label="sparkling"
              value="1"
              className="radio-check"
            />
            <br></br>
            <span className="menu-label">Select country</span> <br></br>
            <span className="wrapper">
              {' '}
              <Form.Check
                type="checkbox"
                label="Italy"
                value="1"
                className="radio-check"
              />
            </span>
            <span className="wrapper">
              {' '}
              <Form.Check
                type="checkbox"
                label="France"
                value="1"
                className="radio-check"
              />
            </span>
            <span className="wrapper">
              {' '}
              <Form.Check
                type="checkbox"
                label="Germany"
                value="1"
                className="radio-check"
              />
            </span>
          </div>
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <div>Select style</div>
              <span>
                <Form.Check type="checkbox" label="red" value="1" />
                <Form.Check type="checkbox" label="white" value="2" />{' '}
              </span>

              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default MyNav;
