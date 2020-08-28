import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/Homepage'

import {Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
    <Switch>
        <Route exact path='/' component = {HomePage} />
     
        </Switch>  
    </div>
  );
}

export default App;
