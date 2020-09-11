import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/Homepage'

import {Switch, Route } from "react-router-dom";

import Shop from './Pages/ShopPage/Shop'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp'
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'

const App = () => {

  const [currentUser, setCurrentUser] = React.useState(null)

  const unsubscribeFromAuth = () => {};

  React.useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else{
        setCurrentUser(userAuth)
      }
     
      
    })
   },[] )

   React.useEffect(() => {
    unsubscribeFromAuth();
   },[] )
   

  return (
    <div className="App">
    <HeaderComponent currentUser = {currentUser}/>
    <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route exact path='/shop' component = {Shop} />
        <Route exact path='/signin' component = {SignInAndSignUp} />
        </Switch>  
    </div>
  );
}

export default App;
