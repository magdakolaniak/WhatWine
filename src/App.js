import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage.jsx';
import WineList from './components/WineList/WineList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNav from './components/MyNav/MyNav.jsx';
import TasteProfiler from './components/TasteProfiler/TasteProfiler';
import Rotate from './components/Rotate/Rotate';
import Detail from './components/Detail/Detail';
function App() {
  return (
    <Router>
      <Route component={Rotate} path="/rotate" />
      {/* <MyNav /> */}
      <Route component={WineList} path="/wineList" exact />
      <Route component={HomePage} path="/" exact />
      <Route component={TasteProfiler} path="/tasteProfiler" exact />
      <Route component={Detail} path="/detail/:wineId" exact />
    </Router>
  );
}

export default App;
