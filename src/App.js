import React,{ useState } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
        <Router>
        <Switch>          
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
