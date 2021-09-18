import './WineList.css';
import '../Rotate/Rotate.jsx';
import NewNav from '../MyNav/NewNav';
import Rotate from '../Rotate/Rotate.jsx';
import { useEffect, useContext, useState } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import axios from 'axios';

const WineList = () => {
  const { setMainData, query } = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  const BASEUrl = process.env.REACT_APP_BE_URL;
  const searchURL = BASEUrl + `/wines/search/${query}`;

  useEffect(() => {
    const getWines = async () => {
      if (!query) {
        const wines = await axios(BASEUrl + `/wines`);

        setMainData(wines.data);

        setLoading(false);
        document.getElementById('mainId').style.backgroundColor = 'transparent';
      } else {
        const wines = await axios(searchURL);

        setMainData(wines.data);
      }
    };
    getWines();
  }, [query]);

  return (
    <>
      <NewNav />

      <div id="mainId" className="wineListMain">
        {loading ? (
          <>
            <span className="loadingWrapperWine">
              <div
                className="loadingText"
                style={{
                  fontSize: '18px',
                  fontWeight: 'bolder',
                  paddingTop: '40px',
                }}
              >
                {' '}
                We are setting you up!
              </div>
              <div className="dotsLoadingHome">
                <div className="loadingHome mb-4">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </span>
          </>
        ) : (
          <Rotate />
        )}
      </div>
    </>
  );
};
export default WineList;
