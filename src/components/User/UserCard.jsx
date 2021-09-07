import './Styles/UserCard.css';
import NewNav from '../MyNav/NewNav';
import { Row, Col } from 'react-bootstrap';
import LeftUser from './LeftUser.jsx';
import MainUser from './MainUser';

const UserCard = () => {
  return (
    <>
      <div className="userMainDiv">
        <NewNav />
        <Row>
          <Col md={4} style={{ padding: '30px' }}>
            <LeftUser />
          </Col>
          <Col md={8} style={{ padding: '30px' }}>
            <MainUser />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserCard;
