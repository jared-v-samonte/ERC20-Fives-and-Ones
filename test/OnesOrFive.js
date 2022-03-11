const { expect } = require("chai");
const hre = require('hardhat');

describe("testing name", function () {
  it("check Ones minting", async function () {
    // test wallet
    const [owner] = await hre.ethers.getSigners();

    //get contract instructions
    const OOF_contract = await hre.ethers.getContractFactory("OnesOrFive");
    const ones_contract = await hre.ethers.getContractFactory("Ones");
    const fives_contract = await hre.ethers.getContractFactory("Five");
  
    //deploy contracts
    const deployed_OOF = await OOF_contract.deploy();
    const deployed_ones = await ones_contract.deploy(deployed_OOF.address);
    const deployed_fives = await fives_contract.deploy(deployed_OOF.address);

    //set parameters for OOF contract
    await deployed_OOF.set_OOF_contracts(deployed_ones.address, deployed_fives.address);

    //mint with OOF contract
    await deployed_OOF.mint_ones(owner.address, 1000); 
   
    expect(await deployed_ones.name()).to.equal("Ones");
  });
});

describe("testing symbol", function () {
  it("check Fives minting", async function () {
    // test wallet
    const [owner] = await hre.ethers.getSigners();

    //get contract instructions
    const OOF_contract = await hre.ethers.getContractFactory("OnesOrFive");
    const ones_contract = await hre.ethers.getContractFactory("Ones");
    const fives_contract = await hre.ethers.getContractFactory("Five");

    //deploy contracts
    const deployed_OOF = await OOF_contract.deploy();
    const deployed_ones = await ones_contract.deploy(deployed_OOF.address);
    const deployed_fives = await fives_contract.deploy(deployed_OOF.address);

    //set parameters for OOF contract
    await deployed_OOF.set_OOF_contracts(deployed_ones.address, deployed_fives.address);

    //mint with OOF contract
    await deployed_OOF.mint_fives(owner.address, 1000); 

    expect(await deployed_fives.name()).to.equal("Five");
  });
});

describe("testing value", function () {
  it("check value of Ones", async function () {
    // test wallet
    const [owner] = await hre.ethers.getSigners();

    //get contract instructions
    const OOF_contract = await hre.ethers.getContractFactory("OnesOrFive");
    const ones_contract = await hre.ethers.getContractFactory("Ones");
    const fives_contract = await hre.ethers.getContractFactory("Five");

    //deploy contracts
    const deployed_OOF = await OOF_contract.deploy();
    const deployed_ones = await ones_contract.deploy(deployed_OOF.address);
    const deployed_fives = await fives_contract.deploy(deployed_OOF.address);

    //set parameters for OOF contract
    await deployed_OOF.set_OOF_contracts(deployed_ones.address, deployed_fives.address);

    //mint with OOF contract
    await deployed_OOF.mint_fives(owner.address, 1000); 

    expect(await deployed_ones.value()).to.equal(1);
  });
});

describe("testing value", function () {
  it("check amount of Fives", async function () {
    // test wallet
    const [owner] = await hre.ethers.getSigners();
    
    //get contract instructions
    const OOF_contract = await hre.ethers.getContractFactory("OnesOrFive");
    const ones_contract = await hre.ethers.getContractFactory("Ones");
    const fives_contract = await hre.ethers.getContractFactory("Five");

    //deploy contracts
    const deployed_OOF = await OOF_contract.deploy();
    const deployed_ones = await ones_contract.deploy(deployed_OOF.address);
    const deployed_fives = await fives_contract.deploy(deployed_OOF.address);

    //set parameters for OOF contract
    await deployed_OOF.set_OOF_contracts(deployed_ones.address, deployed_fives.address);

    //mint with OOF contract
    await deployed_OOF.mint_fives(owner.address, 1000); 

    expect(await deployed_fives.totalSupply()).to.equal(1000);
  });
});

  describe("testing conversion", function () {
    it("check conversions", async function () {
      // test wallet
    const [owner] = await hre.ethers.getSigners();
    
    //get contract instructions
    const OOF_contract = await hre.ethers.getContractFactory("OnesOrFive");
    const ones_contract = await hre.ethers.getContractFactory("Ones");
    const fives_contract = await hre.ethers.getContractFactory("Five");

    //deploy contracts
    const deployed_OOF = await OOF_contract.deploy();
    const deployed_ones = await ones_contract.deploy(deployed_OOF.address);
    const deployed_fives = await fives_contract.deploy(deployed_OOF.address);
  
    //set parameters for OOF contract
    await deployed_OOF.set_OOF_contracts(deployed_ones.address, deployed_fives.address);

    //mint with OOF contract
    await deployed_OOF.mint_fives(owner.address, 1000);
    await deployed_OOF.convert_to_ones(owner.address, 1000);

      expect(await deployed_ones.totalSupply()).to.equal(5000);
    });
  });