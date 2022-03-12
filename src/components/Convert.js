import React, { Component } from 'react';
import {Button, View} from 'react-native';
import {ContractFactory, utils, providers} from 'ethers';
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

    const number = utils.parseUnits(this.state.amount, 18)

    const oof = new ContractFactory(oof_abi(), oof_bytecode(), signer).attach("0xE41d8b14cDD350ceA154e1e28AbF25802ec9A272")
    await oof.convert_to_ones(signersAddress, number);
  }


  async convertToFives () {

    await window.ethereum.request({method: 'eth_requestAccounts'});
    const provider = new providers.Web3Provider(window.ethereum);

    const signer = await provider.getSigner()
    const signersAddress = await signer.getAddress()
    console.log("Account:", signersAddress);

    const number = utils.parseUnits(this.state.amount, 18)

    const oof = new ContractFactory(oof_abi(), oof_bytecode(), signer).attach("0xE41d8b14cDD350ceA154e1e28AbF25802ec9A272")
    await oof.convert_to_fives(signersAddress, number);
  }

  constructor(props) 
  {
    super(props)
    this.state = 
    {
      signersAddress:null,
      amount: null,
    }
    this.convertToOnes = this.convertToOnes.bind(this)
    this.convertToFives = this.convertToFives.bind(this)
  }


  render() {
    return (

      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
      <h1>Convert OOF</h1>

      <h8></h8>
      <Button
      title="Home Page"
      onPress={() => this.props.navigation.navigate('Home')}
      />

    <form onSubmit={(event) => {
      event.preventDefault()
      const temp_amount = this.fiveToOne.value
      this.setState({
        amount: temp_amount,
      })
      this.convertToOnes()
    }}>


<div className="form-group mr-sm-2">
    <input
      id= 'fiveToOne'   
      type="text"
      className="form-control-sm"
      placeholder="Convert to Ones"
      required
      ref={(input) => {this.fiveToOne = input}}
    />


    <div className="form-group mr-sm-2"></div>
    <input
      type='submit'
      className='btn btn-block btn-primary'
      value='Fives to Ones'
    />
    </div></form>   


    <form onSubmit={(event) => {
      event.preventDefault()
      const temp_amount = this.oneToFive.value
      this.setState({
        amount: temp_amount,
      })
      this.convertToFives()
    }}>


<div className="form-group mr-sm-2">
    <input
      id= 'oneToFive'   
      type="text"
      className="form-control-sm"
      placeholder="Convert to Fives"
      required
      ref={(input) => {this.oneToFive = input}}
    />


    <div className="form-group mr-sm-2"></div>
    <input
      type='submit'
      className='btn btn-block btn-primary'
      value='Ones to Fives'
    />
    </div></form> 

    <ul>
      <li>Ones' Address:  0xfB64a354ed9e8Cb05b5A60b2037fd08AF387e5A0</li>
      <li>Five's Address:  0x528B9605973Ca2bdb42c7F5cACf6629B589a9794</li>
    </ul>        
    </View>
    )
  }
}
export default Convert;

