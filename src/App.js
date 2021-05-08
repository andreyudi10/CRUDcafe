import React,{ useState } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import LaporanCafeJurnal from './components/LaporanCafeJurnal';
import MasterMenu from './components/MasterMenu';
import TransaksiGudang from './components/TransaksiGudang';
import VoucherCafe from './components/VoucherCafe';


function App() {
  return (
    <div className="App">
        <Router>
        <Switch>          
          <Route exact path="/LaporanCafeJurnal" >
            <LaporanCafeJurnal />
          </Route>
          <Route exact path="/MasterMenu" >
            <MasterMenu />
          </Route>
          <Route exact path="/TransaksiGudang" >
            <TransaksiGudang />
          </Route>
          <Route exact path="/VoucherCafe" >
            <VoucherCafe />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
