
const { ethers } = require("hardhat");

async function main() {    
  //get contract instructions
  const OOF_contract = await ethers.getContractFactory("OnesOrFive");
  const ones_contract = await ethers.getContractFactory("Ones");
  const fives_contract = await ethers.getContractFactory("Five");

  //deploy contracts
  const deployed_OOF = await OOF_contract.deploy();
  const deployed_ones = await ones_contract.deploy(deployed_OOF.address);
  const deployed_fives = await fives_contract.deploy(deployed_OOF.address);


  //set parameters for contracts
  await deployed_OOF.set_OOF_contracts(deployed_ones.address, deployed_fives.address);
  await deployed_ones.set_contract_of_Five(deployed_fives.address);
  await deployed_fives.set_contract_of_Ones(deployed_ones.address);

    console.log("OOF contract all set...")
    console.log("Ones' Address: ", deployed_ones.address)
    console.log("Five's Address: ", deployed_fives.address)
    console.log("OOF's Address: ", deployed_OOF.address)

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });