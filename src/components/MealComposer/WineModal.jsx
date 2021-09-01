import { Modal, Row, Col } from 'react-bootstrap';
import './WineModal.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import Chart from 'react-apexcharts';

const WineModal = (props) => {
  const wines = ['first', 'second', 'third'];
  const { mainData, recipe } = useContext(LoginContext);
  const [pickedBottles, setPickedBottles] = useState([]);
  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: [],
    },
  ]);
  const [profile, setProfile] = useState({
    bitternes: '',
    fattiness: '',
    saltiness: '',
    savorines: '',
    sourness: '',
    spiciness: '',
    sweetness: '',
  });

  const filteredWines = () => {
    let fattiness = profile.fattiness;
    let ingredient = recipe.ingredients[0];
    let filtered = [];
    if (fattiness > 50 && ingredient === 'beef') {
      filtered = mainData.filter(
        (wine) => wine.character.body === 'full' && wine.type === 'red'
      );
    } else {
      filtered = mainData.filter(
        (wine) => wine.character.body === 'medium minus' && wine.type === 'red'
      );
    }
    console.log(filtered);
    setPickedBottles(filtered);
  };

  const getClassName = (index) => {
    if (index === 0) {
      return 'columnSingle slide-in-left';
    }
    if (index === 1) {
      return 'columnSingle slide-in-left1';
    }
    if (index === 2) {
      return 'columnSingle slide-in-left2';
    }
  };
  let currentId = props.dishId;

  let APIUrl = 'https://api.spoonacular.com/recipes/';
  let key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getWidget = async (currentId) => {
      const data = await axios(
        APIUrl + `${currentId}/tasteWidget.json?&apiKey=${key}`
      );

      setSeries([
        {
          name: 'level',
          data: [
            data.data.bitterness,
            data.data.fattiness,
            data.data.saltiness,
            data.data.savoriness,
            data.data.sourness,
            data.data.spiciness,
            data.data.sweetness,
          ],
        },
      ]);
      setProfile({
        bitternes: data.data.bitterness,
        fattiness: data.data.fattiness,
        saltiness: data.data.saltiness,
        savorines: data.data.savoriness,
        sourness: data.data.sourness,
        spiciness: data.data.spiciness,
        sweetness: data.data.sweetness,
      });
    };
    const filteredWines = () => {
      let fattiness = profile.fattiness;

      let filtered = [];
      if (fattiness > 50) {
        filtered = mainData.filter(
          (wine) => wine.character.body === 'full' && wine.type === 'red'
        );
      } else {
        filtered = mainData.filter(
          (wine) =>
            wine.character.body === 'medium minus' && wine.type === 'red'
        );
      }
      console.log(filtered);
      setPickedBottles(filtered);
    };

    filteredWines();
    getWidget(currentId);
  }, [currentId]);

  const [chart, setChart] = useState({
    options: {
      chart: {
        id: 'apexchart-example',
        style: {
          colors: ['green'],
        },
      },
      xaxis: {
        categories: [
          'bitterness',
          'fattiness',
          'saltiness',
          'savoriness',
          'sourness',
          'spiciness',
          'sweetness',
        ],
        labels: {
          show: true,
          style: {
            colors: ['black'],
          },
        },
      },
    },
    series: [
      {
        name: 'level',
        data: [],
      },
    ],
  });

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalComponent"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Chart
              options={chart.options}
              series={series}
              type="bar"
              width={600}
              height={420}
            />
            <div></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Row>
            {pickedBottles.map((item, i) => (
              <Col md={12} className={getClassName(i)} key={i}>
                <Row className="singleRow">
                  <Col md={2}>
                    <div>{i + 1}</div>
                  </Col>
                  <Col md={2}>
                    <img src={item.image} alt="img" className="imgStyling" />
                  </Col>
                  <Col md={8}>
                    <div className="fullName">{item.fullName}</div>
                    <div>{item.grape}</div>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default WineModal;
