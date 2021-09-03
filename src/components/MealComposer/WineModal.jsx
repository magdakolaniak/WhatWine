import { Modal, Row, Col } from 'react-bootstrap';
import './Modals.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import Chart from 'react-apexcharts';
import { GiGrapes } from 'react-icons/gi';

const WineModal = (props) => {
  const BASEUrl = process.env.REACT_APP_API;
  const { recipe } = useContext(LoginContext);
  const [choice, setChoice] = useState([]);
  const [filter, setFilter] = useState({
    type: '',
    body: '',
  });
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
    if (index === 3) {
      return 'columnSingle slide-in-left3';
    }
    if (index === 4) {
      return 'columnSingle slide-in-left4';
    }
  };
  let currentId = props.dishId;

  let APIUrl = 'https://api.spoonacular.com/recipes/';
  let key = process.env.REACT_APP_API_KEY_M;
  // let keyM = process.env.REACT_APP_API_KEY;

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
    const setFiltering = () => {
      if (recipe.ingredients.includes('beef') && profile.fattiness > 50) {
        setFilter({
          type: 'red',
          body: 'full',
        });
      }
      if (recipe.ingredients.includes('beef') && profile.fattiness < 50) {
        setFilter({
          type: 'red',
          body: 'medium plus',
        });
      }
      if (recipe.ingredients.includes('cheese') && profile.fattiness < 50) {
        setFilter({
          type: 'white',
          body: 'medium',
        });
      }
      if (recipe.ingredients.includes('cheese') && profile.fattiness > 50) {
        setFilter({
          type: 'white',
          body: 'medium plus',
        });
      }
    };
    setFiltering();

    const getWines = async (filter) => {
      const wines = await axios(
        BASEUrl + `?type=${filter.type}&character.body=${filter.body}`
      );

      setChoice(wines.data);
    };

    getWines(filter);

    getWidget(currentId);
  }, [currentId]);

  const [chart, setChart] = useState({
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
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modalTitle"
          >
            Graph below is representing your chosen dish Taste Profile.<br></br>
            According to collected data we selected perfect wine match!<hr></hr>
            <Chart
              options={chart.options}
              series={series}
              type="bar"
              width={600}
              height={320}
            />
            <div></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Row>
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
