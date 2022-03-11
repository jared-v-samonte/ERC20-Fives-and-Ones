import React, { Component } from 'react';
import {Button, View} from 'react-native';
import {ContractFactory, BigNumber, providers} from 'ethers';
import oof_abi from './smart_contracts/OOFAbi'; 
import oof_bytecode from './smart_contracts/OOFBytecode';  
require('dotenv').config();


class Convert extends Component {


  async convertToOnes () {

    await window.ethereum.request({method: 'eth_requestAccounts'});
    const provider = new providers.Web3Provider(window.ethereum);

    const signer = await provider.getSigner()
    const signersAddress = await signer.getAddress()
    console.log("Account:", signersAddress);

    const amount = BigNumber.from(this.state.amount)


    const oof = new ContractFactory(oof_abi(), oof_bytecode(), signer).attach("0x5EE3Dd2bFa437ae04d9BA5C74Ed1b989e060fb0C")
    await oof.convert_to_ones(signersAddress, amount);
    }


    async convertToFives () {

      await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = new providers.Web3Provider(window.ethereum);
  
      const signer = await provider.getSigner()
      const signersAddress = await signer.getAddress()
      console.log("Account:", signersAddress);

      const amount = BigNumber.from(this.state.amount)
  
      const oof = new ContractFactory(oof_abi(), oof_bytecode(), signer).attach("0x5EE3Dd2bFa437ae04d9BA5C74Ed1b989e060fb0C")
      await oof.convert_to_fives(signer.address, amount);
      }

  constructor(props) 
  {
    super(props)
    this.state = 
    {
      amount: null,
    }
    this.convertToOnes = this.convertToOnes.bind(this)
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
      <h1>Mint Ones</h1>

      <h8></h8>
      <Button
      title="Home Page"
      onPress={() => this.props.navigation.navigate('Home')}
      />

    <form onSubmit={(event) => {
      event.preventDefault()
      const temp_amount = this.amount.value
      this.setState({
        amount: temp_amount,
      })
      this.convertToOnes()
    }}>


    <div className="form-group mr-sm-2">

    <div className="form-group mr-sm-2"></div>
    <input
      id= 'amount'   
      type="text"
      className="form-control-sm"
      placeholder="Convert to Ones"
      required
      ref={(input) => {this.amount = input}}
    />


    <div className="form-group mr-sm-2"></div>
    <input
      type='submit'
      className='btn btn-block btn-primary'
      value='Convert to Ones'
    />
    </div></form>   


    <form onSubmit={(event) => {
      event.preventDefault()
      const temp_amount = this.amount.value
      this.setState({
        amount: temp_amount,
      })
      this.convertToFives()
    }}>


    <div className="form-group mr-sm-2">

    <div className="form-group mr-sm-2"></div>
    <input
      id= 'amount'   
      type="text"
      className="form-control-sm"
      placeholder="Convert to Fives"
      required
      ref={(input) => {this.amount = input}}
    />


    <div className="form-group mr-sm-2"></div>
    <input
      type='submit'
      className='btn btn-block btn-primary'
      value='Convert to Fives'
    />
    </div></form> 

    <ul>
      <li>Ones' Address:  0x74916Bbec7Dca2E4D6bD626492E84c2980A5ab46</li>
      <li>Five's Address:  0x20b980b7ECce5df3D23EfeB211CD5572f2885621</li>
    </ul>      
    </View>
    )
  }
}
export default Convert;

