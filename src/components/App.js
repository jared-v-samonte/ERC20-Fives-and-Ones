import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import './App.css';
import MintOnes from './MintOnes'
import MintFives from './MintFives'
import Convert from './Convert'
import HomePage from './HomePage.js'



class App extends Component {
  render() 
  {
    return(
      <AppContainer />
    )
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage
  },
  MintOnes: {
    screen: MintOnes
  },
  MintFives: {
    screen: MintFives
  },
  Convert: {
    screen: Convert
  }
});


const AppContainer = createAppContainer(AppNavigator);

export default App



