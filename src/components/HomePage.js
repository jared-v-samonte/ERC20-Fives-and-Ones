import React, { Component } from 'react';
import {Button, View} from 'react-native'; 



class HomePage extends Component {

  

  render() {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <h1>Ones Or Five</h1>
      <h1>OOF</h1>
      
      <div class="marginButton">
      <Button
      title="Mint Ones"
      onPress={() => this.props.navigation.navigate('MintOnes')}
      />
      </div>

      <div class="marginButton">
      <Button
      title="Mint Fives"
      onPress={() => this.props.navigation.navigate('MintFives')}
      />
      </div>

      <div class="marginButton">
      <Button
      title="Convert Ones or Fives"
      onPress={() => this.props.navigation.navigate('Convert')}
      />
      </div>

      <div class="marginTitle"> Mints Ones (ONE) or Five (FVE)! 5 Ones equals to 1 Five and vise versa. Use this website to mint these tokens and convert them back and forth:</div>
        <ul>
          <li>Mint Ones</li>
          <li>Mint Five(s)</li>
          <li>Convert an amount of Ones into Five(s)</li>
          <li>Convert an amount of Five(s) into Ones</li>
        </ul>

        <ul>
          <li>Ones' Address:  0xfB64a354ed9e8Cb05b5A60b2037fd08AF387e5A0</li>
          <li>Five's Address:  0x528B9605973Ca2bdb42c7F5cACf6629B589a9794</li>
          <li>OOF's Address:  0xE41d8b14cDD350ceA154e1e28AbF25802ec9A272</li>
        </ul>
      </View>
      
    )
  }
}
export default HomePage;


