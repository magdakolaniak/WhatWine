import { Modal, Row, Col } from 'react-bootstrap';
import './Styles/Behind.css';
import {
  DiMongodb,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiNpm,
  DiJavascript,
  DiHtml5,
  DiVisualstudio,
  DiNodejs,
} from 'react-icons/di';
import { GiGrapes } from 'react-icons/gi';
import me from '../../components/assets/images/me.png';

const Behind = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalComponent"
        id="meModal"
      >
        <Modal.Header closeButton>
          <div className="meModalTitle">
            <div style={{ marginRight: '10px', fontStyle: 'italic' }}>
              {' '}
              Skills involved while creating{' '}
            </div>
            <div className="meLogoWrapper">
              <GiGrapes style={{ color: '#800', fontSize: '30px' }} />
              <span style={{ color: '#800', fontWeight: 'bolder' }}>
                WhatWine?
              </span>
            </div>
            <hr></hr>{' '}
          </div>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Row
            style={{
              paddingLeft: '50px',
              paddingRight: '80px',
              marginRight: '30px',
            }}
          >
            <Col xs={12} md={6} className="meLeftCol">
              <span>
                <DiReact
                  className="icons"
                  style={{ stroke: '#60DBFB', strokeWidth: '0.5px' }}
                />
              </span>
              <span>
                <DiBootstrap className="icons" style={{ color: '#8311F9' }} />
              </span>
              <span>
                {' '}
                <DiMongodb className="icons" style={{ color: '#4FAA40' }} />
              </span>
              <br></br>
              <span>
                <DiNpm
                  className="icons"
                  style={{ stroke: '#CC3533', strokeWidth: '0.5px' }}
                />
              </span>

              <span>
                <DiNodejs className="icons2" style={{ color: 'black' }} />
              </span>

              <span>
                <DiVisualstudio
                  className="icons"
                  style={{ color: '#0078BA' }}
                />
              </span>
              <br></br>

              <span>
                <DiHtml5 className="icons" style={{ color: '#E44D27' }} />
              </span>

              <span>
                {' '}
                <DiCss3 className="icons" style={{ color: '#0070B9' }} />
              </span>

              <span>
                {' '}
                <DiJavascript className="icons" style={{ color: '#63A714' }} />
              </span>
            </Col>
            <Col xs={12} md={6} className="meRightCol">
              <img src={me} style={{ height: '260px' }} />
              {/* <a href="https://linktr.ee/magda_kolaniak" target="_blank">
                {' '}
                <div>My linkTree</div>
              </a> */}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Behind;
