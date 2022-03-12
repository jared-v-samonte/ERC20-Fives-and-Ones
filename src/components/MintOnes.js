import React, { Component } from 'react';
import {Button, View} from 'react-native';
import {ContractFactory, utils, providers} from 'ethers';
import oof_abi from './smart_contracts/OOFAbi'; 
import oof_bytecode from './smart_contracts/OOFBytecode';  
require('dotenv').config();



class MintOnes extends Component {


  async mintOnes () {

    await window.ethereum.request({method: 'eth_requestAccounts'});
    const provider = new providers.Web3Provider(window.ethereum);

    const signer = await provider.getSigner()
    const signersAddress = await signer.getAddress()
    console.log("Account:", signersAddress);

    const number = utils.parseUnits(this.state.amount, 18)

    console.log("Minting this amount:", this.state.amount)
    const oof = new ContractFactory(oof_abi(), oof_bytecode(), signer).attach("0xE41d8b14cDD350ceA154e1e28AbF25802ec9A272")
    await oof.mint_ones(signersAddress, number);
    console.log("all done!!")
    }

  constructor(props) 
  {
    super(props)
    this.state = 
    {
      amount: null,
    }
    this.mintOnes = this.mintOnes.bind(this)
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
      this.mintOnes()
    }}>


    <div className="form-group mr-sm-2">

    <div className="form-group mr-sm-2"></div>
    <input
      id= 'amount'   
      type="text"
      className="form-control-sm"
      placeholder="Amount of Ones"
      required
      ref={(input) => {this.amount = input}}
    />


    <div className="form-group mr-sm-2"></div>
    <input
      type='submit'
      className='btn btn-block btn-primary'
      value='Mint Ones'
    />
    </div></form>

    <ul>
      <li>Ones' Address:  0xfB64a354ed9e8Cb05b5A60b2037fd08AF387e5A0</li>
    </ul>     
    </View>
    )
  }
}
export default MintOnes;

