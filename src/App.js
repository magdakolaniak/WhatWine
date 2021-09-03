import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage.jsx';
import WineList from './components/WineList/WineList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TasteProfiler from './components/TasteProfiler/TasteProfiler';
import Rotate from './components/Rotate/Rotate';
import Detail from './components/Detail/Detail';
import TasteBoard from './components/TasteBoard/TasteBoard';
import MealMain from './components/MealComposer/MealMain.jsx';
import LoginPage from './components/Login/LoginPage';
import MyNav from './components/MyNav/MyNav';

function App() {
  return (
    <Router>
      <Route component={Rotate} path="/rotate" />
      <Route component={LoginPage} path="/" exact />
      <Route component={MyNav} path="/nav" exact />
      <Route component={WineList} path="/wineList" exact />
      <Route component={HomePage} path="/home" exact />
      <Route component={TasteProfiler} path="/tasteProfiler" exact />
      <Route component={Detail} path="/detail/:wineId" exact />
      <Route component={TasteBoard} path="/tasteBoard" exact />
      <Route component={MealMain} path="/mealComposer" exact />
    </Router>
  );
}

export default App;
