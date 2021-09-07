import { useState, useContext } from 'react';
import { Carousel, Container, Card, Button, Row, Col } from 'react-bootstrap';
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
            {news.slice(6, 9).map((el) => (
              <Col xs={4} key={el.publishedAt}>
                <Card style={{ height: '350px' }}>
                  <Card.Img
                    src={el.urlToImage}
                    style={{ minHeight: '150px' }}
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
                  <button className="getNewsButton">Read now</button>
                </Card>{' '}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {news.slice(11, 14).map((el) => (
              <Col xs={4} key={el.publishedAt}>
                <Card style={{ height: '350px' }}>
                  <Card.Img
                    src={el.urlToImage}
                    style={{ minHeight: '150px' }}
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
                  <button className="getNewsButton">Read now</button>
                </Card>{' '}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {news.slice(15, 18).map((el) => (
              <Col xs={4} key={el.publishedAt}>
                <Card style={{ height: '350px' }}>
                  <Card.Img
                    src={el.urlToImage}
                    style={{ minHeight: '150px' }}
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
                  <button className="getNewsButton">Read now</button>
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
