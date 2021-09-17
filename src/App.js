import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage.jsx';
import WineList from './components/WineList/WineList';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import TasteProfiler from './components/TasteProfiler/TasteProfiler';
import Rotate from './components/Rotate/Rotate';
import Detail from './components/Detail/Detail';
import TasteBoard from './components/TasteBoard/TasteBoard';
import MealMain from './components/MealComposer/MealMain.jsx';
import LoginPage from './components/Login/LoginPage';
import UserCard from './components/User/UserCard';
import RegisterModal from './components/Login/RegisterModal';
import { LoginContext } from './components/GlobalState/GlobalState';
import { useContext } from 'react';

function App() {
  const { loggedIn, mainData } = useContext(LoginContext);
  return (
    <Router>
      <Route component={Rotate} path="/rotate" />
      <Route component={LoginPage} path="/" exact />

      <Route component={WineList} path="/wineList" exact />
      <Route component={HomePage} path="/home" exact />
      <Route component={TasteProfiler} path="/tasteProfiler" exact />
      <Route component={Detail} path="/detail/:wineId" exact>
        {mainData.length <= 0 ? <Redirect to="/wineList" /> : <Detail />}
      </Route>

      <Route component={TasteBoard} path="/tasteBoard" exact />
      <Route component={MealMain} path="/mealComposer" exact />

      <Route component={UserCard} path="/userProfile" exact>
        {!loggedIn ? <Redirect to="/" /> : <UserCard />}
      </Route>
      <Route component={RegisterModal} path="/register" exact />
    </Router>
  );
}

export default App;
