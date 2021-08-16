import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage.jsx';
import WineList from './components/WineList/WineList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNav from './components/MyNav/MyNav.jsx';
import TasteProfiler from './components/TasteProfiler/TasteProfiler';

function App() {
  return (
    <Router>
      <MyNav />
      <Route component={WineList} path="/wineList" exact />
      <Route component={HomePage} path="/home" exact />
      <Route component={TasteProfiler} path="/tasteProfiler" exact />
    </Router>
  );
}

export default App;
