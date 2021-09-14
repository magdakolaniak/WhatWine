import { useState, useContext } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import './Styles/NewsCarousel.css';
import { LoginContext } from '../GlobalState/GlobalState.jsx';

const NewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const { news } = useContext(LoginContext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} id="newsCarousel">
        <Carousel.Item>
          <Row>
            {news.slice(6, 9).map((el, i) => (
              <Col xs={4} key={i} style={{ padding: '10px;' }}>
                <Card className="cardNews" style={{ height: '350px' }}>
                  <Card.Img
                    className="cardNewsImg"
                    src={el.urlToImage}
                    style={{ minHeight: '150px' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`${el.url}`, '_blank');
                    }}
                  />
                  <Card.Body style={{ height: '350px', paddingTop: '30px' }}>
                    <Card.Title
                      style={{
                        fontSize: '16px',
                        textAlign: 'center',
                        marginBottom: '10px',
                      }}
                    >
                      {el.title}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer
                    id={el.url}
                    style={{
                      cursor: 'pointer',
                      fontStyle: 'italic',
                      textAlign: 'center',
                    }}
                  >
                    add to read later
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {news.slice(11, 14).map((el, i) => (
              <Col xs={4} key={i}>
                <Card className="cardNews" style={{ height: '350px' }}>
                  <Card.Img
                    className="cardNewsImg"
                    src={el.urlToImage}
                    style={{ minHeight: '150px' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`${el.url}`, '_blank');
                    }}
                  />
                  <Card.Body style={{ height: '250px', paddingTop: '30px' }}>
                    <Card.Title
                      style={{
                        fontSize: '16px',
                        textAlign: 'center',
                        marginBottom: '10px',
                      }}
                    >
                      {el.title}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer
                    id={el.url}
                    style={{
                      cursor: 'pointer',
                      fontStyle: 'italic',
                      textAlign: 'center',
                    }}
                  >
                    add to read later
                  </Card.Footer>
                </Card>{' '}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {news.slice(15, 18).map((el, i) => (
              <Col xs={4} key={i}>
                <Card className="cardNews" style={{ height: '350px' }}>
                  <Card.Img
                    className="cardNewsImg"
                    src={el.urlToImage}
                    style={{ minHeight: '150px' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`${el.url}`, '_blank');
                    }}
                  />
                  <Card.Body style={{ height: '250px', paddingTop: '30px' }}>
                    <Card.Title
                      style={{
                        fontSize: '16px',
                        textAlign: 'center',
                        marginBottom: '10px',
                      }}
                    >
                      {el.title}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer
                    id={el.url}
                    style={{
                      cursor: 'pointer',
                      fontStyle: 'italic',
                      textAlign: 'center',
                    }}
                  >
                    add to read later
                  </Card.Footer>
                </Card>{' '}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default NewsCarousel;
