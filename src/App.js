import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/Homepage'

import {Switch, Route } from "react-router-dom";

import Shop from './Pages/ShopPage/Shop'

const App = () => {
  return (
    <div className="App">
    <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route exact path='/shop' component = {Shop} />
        </Switch>  
    </div>
  );
}

export default App;
