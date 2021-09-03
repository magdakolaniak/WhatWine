import React, { useState } from 'react';

export const LoginContext = React.createContext();

const GlobalState = ({ children }) => {
  const [user, setUser] = useState({});

  const [detailed, setDetailed] = useState({});
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [style, setStyle] = useState('');
  const [country, setCountry] = useState('');
  const [tasteProfile, setTasteProfile] = useState({
    body: '',
    sweetness: '',
    type: '',
  });
  const [grapeColor, setGrapeColor] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [pickedFromBoard, setPickedFromBoard] = useState({});
  const [query, setQuery] = useState();
  const [mainData, setMainData] = useState([]);
  const [recipe, setRecipe] = useState({
    cuisine: '',
    ingredients: [],
    mealType: '',
    intolerances: [],
  });
  const [dishes, setDishes] = useState([]);
  const [wineModalShow, setWineModalShow] = useState(false);
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
        recipe,
        setRecipe,
        dishes,
        setDishes,
        wineModalShow,
        setWineModalShow,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export default GlobalState;
