import './WineList.css';
import '../Rotate/Rotate.jsx';
import NewNav from '../MyNav/NewNav';
import Rotate from '../Rotate/Rotate.jsx';
import { useEffect, useContext } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import axios from 'axios';

const WineList = () => {
  const { setMainData, query } = useContext(LoginContext);
  const BASEUrl = process.env.REACT_APP_API;
  const searchURL = BASEUrl + `/search/${query}`;

  useEffect(() => {
    const getWines = async () => {
      if (!query) {
        const wines = await axios(BASEUrl + `/`);

        setMainData(wines.data);
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
      <div className="wineListMain">
        <Rotate />
      </div>
    </>
  );
};
export default WineList;
