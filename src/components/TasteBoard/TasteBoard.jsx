import './TasteBoard.css';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

const TasteBoard = () => {
  const { tasteProfile, setTasteProfile, grapeColor } =
    useContext(LoginContext);

  const myFunc = (e) => {
    setTasteProfile({
      body: e.currentTarget.id,
      sweetness: e.currentTarget.innerHTML,
      type:
        e.currentTarget.innerHTML === 'sweet'
          ? e.currentTarget.innerHTML
          : grapeColor,
    });
  };

  return (
    <>
      <Container
        fluid
        style={{ background: grapeColor === 'red' ? '#800000' : '#d4af37' }}
        className="box2"
      >
        <Row>
          <span className="dry"> DRY</span>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Dry and light<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="light"
                value="dry"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                dry
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Dry and less then medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium minus"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                dry
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Dry and medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                dry
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Dry and more then medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium plus"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                dry
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Dry and full<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="full"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                dry
              </div>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Off-dry and light<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="light"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                off dry
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Off-dry and less then medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium minus"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                off dry
              </div>
            </OverlayTrigger>
          </Col>

          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Off-dry and medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                off dry
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Off-dry and more then medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium plus"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                off dry
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Off-dry and full<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="full"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                off dry
              </div>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Sweet and light<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="light"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                sweet
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Sweet and less then medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium minus"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                sweet
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Sweet and medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                sweet
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Sweet and more then medium<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="medium plus"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                sweet
              </div>
            </OverlayTrigger>
          </Col>
          <Col id="lastCol">
            <OverlayTrigger
              style={{ backgroundColor: 'white' }}
              id="tasteOverlay"
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Sweet and full<br></br> bodied wines
                </Tooltip>
              }
            >
              <div
                id="full"
                className={
                  grapeColor === 'red' ? 'box-single-red' : 'box-single-white'
                }
                onClick={myFunc}
              >
                sweet
              </div>
            </OverlayTrigger>
            <span className="lightBody"> LIGHT BODIED</span>
            <span className="fullBody"> FULL BODIED</span>
          </Col>
        </Row>
        <span className="sweet"> SWEET</span>
      </Container>
    </>
  );
};

export default TasteBoard;
