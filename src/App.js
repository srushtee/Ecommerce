import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/Homepage'

import {Switch, Route } from "react-router-dom";

import Shop from './Pages/ShopPage/Shop'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp'

const App = () => {
  return (
    <div className="App">
    <HeaderComponent/>
    <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route exact path='/shop' component = {Shop} />
        <Route exact path='/signin' component = {SignInAndSignUp} />
        </Switch>  
    </div>
  );
}

export default App;
