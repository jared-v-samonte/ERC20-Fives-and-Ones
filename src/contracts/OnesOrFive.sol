// SPDX-License-Identifier: The MIT Licence.
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract OnesOrFive {
    
    Ones ones_contract;
    Five fives_contract;

    constructor() { }

    function set_OOF_contracts(address ones, address fives) public
    {
        ones_contract = Ones(ones);
        fives_contract = Five(fives);
    }

    function mint_ones(address minted_to, uint256 amount) public 
    {
        ones_contract.mint(minted_to, amount);
    }

    function mint_fives(address minted_to, uint256 amount) public 
    {
        fives_contract.mint(minted_to, amount);
    }

    function convert_to_fives(address minted_to, uint256 amount) public{ 
        //burns ones
        ones_contract.burn(minted_to, amount);
        uint256 new_amount = amount/5;
        //mints fives
        fives_contract.mint(minted_to, new_amount);
    }

    function convert_to_ones(address minted_to, uint256 amount) public { 
        //burns fives
        fives_contract.burn(minted_to, amount);
        uint256 new_amount = amount*5;
        //mints ones
        ones_contract.mint(minted_to, new_amount);
    }
}

contract Ones is ERC20{

    uint256 private _value;
    address control_address;

    constructor(address ones_or_five) ERC20("Ones", "ONE") 
    {
        _value = 1;
        control_address = ones_or_five;
    }

    function value() public virtual view returns (uint256)
    {
        require(msg.sender == control_address);
        return _value;
    }

    function mint(address owner, uint256 amount) public 
    {
        require(msg.sender == control_address);
        _mint(owner, amount);
    }

    function burn(address owner, uint256 amount) public 
    {
        require(msg.sender == control_address);
        _burn(owner, amount);
    }
}

contract Five is ERC20{

    uint256 private _value;
    address control_address;

    constructor(address ones_or_five) ERC20("Five", "FVE") 
    {
        _value = 1;
        control_address = ones_or_five;
    }

    function value() public virtual view returns (uint256)
    {
        require(msg.sender == control_address);
        return _value;
    }

    function mint(address owner, uint256 amount) public 
    {
        require(msg.sender == control_address);
        _mint(owner, amount);
    }

    function burn(address owner, uint256 amount) public 
    {
        require(msg.sender == control_address);
        _burn(owner, amount);
    }
}