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
          <li>Ones' Address:  0xB71a1D29DA98f68Bc0c7177E4a94f17684520614</li>
          <li>Five's Address:  0x7C8E67FeB0d186Bb62311C68648a2463b118A1D3</li>
          <li>OOF's Address:  0x93B797c488e1541332762e1480b943F94D28D851</li>
        </ul>
      </View>
      
    )
  }
}
export default HomePage;


