import { Modal, Row, Col } from 'react-bootstrap';
import './Modals.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import Chart from 'react-apexcharts';
import { GiGrapes } from 'react-icons/gi';

const WineModal = (props) => {
  const BASEUrl = process.env.REACT_APP_BE_URL;
  const { recipe, mainData } = useContext(LoginContext);
  const [choice, setChoice] = useState([]);
  const redMeat = [
    'beef',
    'lamb',
    'pork',
    'veal',
    'venison',
    'goat',
    'duck',
    'goose',
    'bison',
  ];
  const whiteMeat = [
    'chicken',
    'fish',
    'rabbit',
    'turkey',
    'shrimp',
    'octopus',
    'salmon',
    'tuna',
    'seafood',
    'cod',
    'heering',
    'halibut',
  ];
  const veggies = [
    'onion',
    'tomato',
    'carrot',
    'parsley',
    'salat',
    'cucumber',
    'potato',
  ];
  const [chart] = useState({
    options: {
      chart: {
        id: 'apexchart-example',
        style: {
          colors: ['#d3d6db'],
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
        fill: {
          colors: ['#d3d6db'],
        },
      },
      colors: ['#800000'],
    },
    series: [
      {
        name: 'level',
        data: [],
      },
    ],
    fill: {
      colors: ['#d3d6db'],
    },
  });
  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: [],
    },
  ]);
  const [profile, setProfile] = useState([]);

  const getClassName = (index) => {
    if (index === 0) {
      return 'columnSingle fade-in-top';
    }
    if (index === 1) {
      return 'columnSingle fade-in-top2';
    }
    if (index === 2) {
      return 'columnSingle fade-in-top3';
    }
    if (index === 3) {
      return 'columnSingle fade-in-top4';
    }
    if (index === 4) {
      return 'columnSingle fade-in-top5';
    }
  };
  let currentId = props.dish;

  let APIUrl = 'https://api.spoonacular.com/recipes/';
  let key = process.env.REACT_APP_API_KEY_M;

  useEffect(() => {
    const getWidget = async () => {
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
    if (currentId) {
      getWidget();
    }
    const setFiltering = () => {
      console.log(recipe.ingredients[0]);

      if (redMeat.indexOf(recipe.ingredients[0] !== -1)) {
        let type = mainData.filter((wine) => wine.type === 'red');
        let body = [];
        profile.sweetness > 80 && profile.fattiness > 50
          ? (body = type.filter(
              (wine) =>
                wine.character.acidity === 'medium plus' &&
                wine.character.body === 'full'
            ))
          : (body = type.filter(
              (wine) => wine.character.body === 'medium minus'
            ));
        console.log('WINES', body);
        setChoice(body);
      } else if (whiteMeat.indexOf(recipe.ingredients[0] !== -1)) {
        console.log('filter2nd');
      } else if (veggies.indexOf(recipe.ingredients[0] !== undefined)) {
        console.log('filter3rdd');
      }
    };

    setFiltering();

    console.log(currentId);
    console.log(profile);
  }, [currentId]);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalComponent"
        id="wineModal"
      >
        <Modal.Header closeButton>
          <div className="modalTitle">
            Graph below is representing your chosen dish Taste Profile.<br></br>
            According to collected data we selected perfect wine match!<hr></hr>{' '}
          </div>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Chart
            options={chart.options}
            series={series}
            type="bar"
            width={600}
            height={320}
          />
          <Row style={{ paddingLeft: '50px', paddingRight: '50px' }}>
            {choice.slice(0, 5).map((item, i) => (
              <Col md={12} className={getClassName(i)} key={i}>
                <Row className="singleRow">
                  <Col md={2}>
                    <div className="iconWrapperModal">
                      <GiGrapes className="modalGrape" />
                    </div>
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
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default WineModal;
