import './MyNav.css';
import { Nav, Navbar, FormControl, Dropdown, Form } from 'react-bootstrap';
import logo from './newlogo.jpg';
import glass from './wines.png';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const MyNav = () => {
  const { style, setStyle, country, setCountry, query, setQuery } =
    useContext(LoginContext);

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
                // onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
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
    </>
  );
};
export default MyNav;
