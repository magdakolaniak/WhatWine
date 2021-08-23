import './MyNav.css';
import { Nav, Navbar, FormControl, Dropdown, Form } from 'react-bootstrap';
import logo from './newlogo.jpg';
import glass from './wines.png';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const MyNav = () => {
  const { style, setStyle, country, setCountry } = useContext(LoginContext);

  const onValueChange = () => {};
  return (
    <>
      <Navbar id="my-nav" variant="dark" expand="lg">
        <div>
          <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <img src={logo} className="logo" alt="logo" />
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
            <Form>
              {' '}
              <span className="wrapper">
                {' '}
                <Form.Check
                  type="radio"
                  label="red"
                  name="style"
                  className="radio-check"
                />
              </span>
              <span className="wrapper">
                <Form.Check
                  type="radio"
                  label="white"
                  name="style"
                  className="radio-check"
                />
              </span>
              <span className="wrapper">
                {' '}
                <Form.Check
                  type="radio"
                  label="sweet"
                  name="style"
                  className="radio-check"
                />
              </span>
              <Form.Check
                type="radio"
                label="sparkling"
                name="style"
                className="radio-check"
              />
              <br></br>
              <span className="menu-label">Select country</span> <br></br>
              <span className="wrapper">
                {' '}
                <Form.Check
                  type="radio"
                  label="Italy"
                  name="country"
                  className="radio-check"
                />
              </span>
              <span className="wrapper">
                {' '}
                <Form.Check
                  type="radio"
                  label="France"
                  name="country"
                  className="radio-check"
                />
              </span>
              <span className="wrapper">
                {' '}
                <Form.Check
                  type="radio"
                  label="Germany"
                  name="country"
                  className="radio-check"
                />
              </span>
            </Form>
          </div>
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicradio">
              <div>Select style</div>
              <span>
                <Form.Check type="radio" label="red" value="1" />
                <Form.Check type="radio" label="white" value="2" />{' '}
              </span>

              <Form.Check type="radio" label="Check me out" />
              <Form.Check type="radio" label="Check me out" />
              <Form.Check type="radio" label="Check me out" />
            </Form.Group>
          </Form> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default MyNav;
