import React, { useState } from 'react';

export const LoginContext = React.createContext();

const GlobalState = ({ children }) => {
  const [user, setUser] = useState({});
  const [pickedWine, setPickedWine] = useState({});
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [style, setStyle] = useState('');
  const [country, setCountry] = useState('');
  const [taste, setTaste] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        pickedWine,
        setPickedWine,
        lat,
        setLat,
        long,
        setLong,
        style,
        setStyle,
        country,
        setCountry,
        taste,
        setTaste,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export default GlobalState;
