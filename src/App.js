import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/home';
import Developer from './component/developer';
import Designer from './component/designer';
import Apply from './component/apply';
import Journal from './component/journal';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component ={Home}/>
          <Route path="/developer" exact component ={Developer}/>
          <Route path="/designer" exact component ={Designer}/>
          <Route path="/apply" exact component ={Apply}/>
          <Route path="/journal" exact component ={Journal}/>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
