import React, { useState } from 'react';

export const LoginContext = React.createContext();

const GlobalState = ({ children }) => {
  const [user, setUser] = useState({});
  const [detailed, setDetailed] = useState({});
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [style, setStyle] = useState('');
  const [country, setCountry] = useState('');
  const [tasteProfile, setTasteProfile] = useState({ body: '', sweetness: '' });
  const [grapeColor, setGrapeColor] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [pickedFromBoard, setPickedFromBoard] = useState({});
  const [query, setQuery] = useState();
  const [mainData, setMainData] = useState([]);

  return (
    <LoginContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        detailed,
        setDetailed,
        lat,
        setLat,
        long,
        setLong,
        style,
        setStyle,
        country,
        setCountry,
        tasteProfile,
        setTasteProfile,
        grapeColor,
        setGrapeColor,
        pickedFromBoard,
        setPickedFromBoard,
        query,
        setQuery,
        mainData,
        setMainData,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export default GlobalState;
