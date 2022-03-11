import React, { Component } from 'react';
import {Button, View} from 'react-native'; 



class HomePage extends Component {

  

  render() {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
      <h1>OOF</h1>
      <h1>Ones Or Five</h1>
      
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
          <li>Ones' Address:  0x74916Bbec7Dca2E4D6bD626492E84c2980A5ab46</li>
          <li>Five's Address:  0x20b980b7ECce5df3D23EfeB211CD5572f2885621</li>
          <li>OOF's Address:  0x5EE3Dd2bFa437ae04d9BA5C74Ed1b989e060fb0C</li>
        </ul>
      </View>
      
    )
  }
}
export default HomePage;

