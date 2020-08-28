import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/Homepage'

import {Switch, Route } from "react-router-dom";



const HatsPage = () => (
<div>
      <h1>Hats Page</h1>
  </div>
  )
 


const App = () => {
  return (
    <div className="App">
    <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route exact path='/hats' component = {HatsPage} />
        </Switch>  
    </div>
  );
}

export default App;
