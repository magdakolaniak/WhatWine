import { Modal, Row, Col } from 'react-bootstrap';
import './Styles/Behind.css';
import {
  DiMongodb,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiNpm,
  DiJavascript,
  DiVisualstudio,
  DiNodejs,
} from 'react-icons/di';
import { FaGoogle } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiGrapes } from 'react-icons/gi';

const Behind = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // className="modalComponent"
        id="meModal"
      >
        <Modal.Header closeButton>
          <div className="meModalTitle">
            <div
              style={{
                marginRight: '10px',
                fontStyle: 'italic',
                fontSize: '24px',
              }}
            >
              {' '}
              Skills involved while creating{' '}
            </div>
            <div className="meLogoWrapper">
              <GiGrapes style={{ color: '#800', fontSize: '30px' }} />
              <span
                style={{
                  color: '#800',
                  fontWeight: 'bolder',
                  fontSize: '24px',
                }}
              >
                WhatWine?
              </span>
            </div>
          </div>
          <div>And litttle "about me" section</div>
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

              <span style={{ marginLeft: '20px' }}>
                {' '}
                <DiCss3 className="icons" style={{ color: '#0070B9' }} />
              </span>

              <span>
                {' '}
                <DiJavascript className="icons" style={{ color: '#63A714' }} />
              </span>
              <span>
                {' '}
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1631648468/wset1_j8czai.svg"
                  style={{
                    height: '40px',
                    marginLeft: '20px',
                    marginTop: '20px',
                  }}
                  alt="wset-logo"
                />
              </span>
            </Col>
            <Col xs={12} md={6} className="meRightCol">
              <div>
                <img
                  src="https://res.cloudinary.com/dii3cculv/image/upload/v1631648362/me_tc5v5j.jpg"
                  alt="me"
                  style={{ height: '140px', borderRadius: '100px' }}
                />
              </div>
              <span
                style={{
                  padding: '30px',
                  fontSize: '24px',
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                }}
              >
                Magdalena Kolaniak
              </span>
              <div
                style={{
                  width: '350px',
                  padding: '10px',
                  backgroundColor: '#3D3B3C',
                  marginBottom: '20px',
                  color: 'whitesmoke',
                  textAlign: 'center',
                }}
              >
                <FaGoogle style={{ fontSize: '34px', float: 'left' }} />{' '}
                <span style={{ fontSize: '20px' }}>
                  magda.kolaniak@gmail.com
                </span>
              </div>
              <div
                style={{
                  width: '350px',
                  padding: '10px',
                  backgroundColor: '#3D3B3C',
                  marginBottom: '20px',
                  color: 'whitesmoke',
                  textAlign: 'center',
                }}
              >
                <AiFillGithub style={{ fontSize: '34px', float: 'left' }} />{' '}
                <span style={{ fontSize: '20px' }}>@magdakolaniak</span>
              </div>
              <div
                style={{
                  width: '350px',
                  padding: '10px',
                  backgroundColor: '#3D3B3C',
                  marginBottom: '20px',
                  color: 'whitesmoke',
                  textAlign: 'center',
                }}
              >
                <AiFillLinkedin style={{ fontSize: '34px', float: 'left' }} />{' '}
                <span style={{ fontSize: '20px' }}>magda-kolaniak</span>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Behind;
