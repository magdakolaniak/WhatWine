import './WineList.css';
import '../Rotate/Rotate.jsx';
import MyNav from '../MyNav/MyNav';
import Rotate from '../Rotate/Rotate.jsx';
import { useEffect, useContext, useState } from 'react';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import axios from 'axios';

const WineList = () => {
  const { setDetailed, query, mainData, setMainData } =
    useContext(LoginContext);

  const BASEUrl = process.env.REACT_APP_API;

  useEffect(() => {
    console.log('ANYTHING');
    const getWines = async () => {
      const wines = await axios(BASEUrl + `/`);

      console.log(wines.data);
      setMainData(wines.data);
    };
    getWines();
  }, []);

  return (
    <>
      <MyNav />
      <div className="wine-list-main">
        <Rotate />
      </div>
    </>
  );
};
export default WineList;
