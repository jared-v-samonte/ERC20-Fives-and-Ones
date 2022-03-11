import React from 'react';
import {Route, Router} from 'react-router-dom'
import MintOnes from './MintOnes'
import MintFives from './MintFives'
import Convert from './Convert'
import HomePage from './HomePage.js'

const Main = () => {
  return (
    <Router basename='.'>  {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='./MintOnes' component={MintOnes}></Route>
      <Route exact path='./MintFives' component={MintFives}></Route>
      <Route exact path='./Convert' component={Convert}></Route>
      <Route exact path='./HomePage' component={HomePage}></Route>
    </Router>
  );
}

export default Main