// SPDX-License-Identifier: The MIT Licence.
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";



contract OnesOrFive {
    
    Ones ones_contract;
    Five fives_contract;


    constructor() {    }

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

    function convert_to_fives(address minted_to, uint256 amount) public
    { 
        ones_contract.convert(minted_to, amount);
    }

    function convert_to_ones(address minted_to, uint256 amount) public 
    { 
        fives_contract.convert(minted_to, amount);
    }
}

contract Ones is ERC20{
    address private control_address;
    bool private address_not_set;
    Five private fives_contract;


    constructor(address ones_or_five) ERC20("Ones", "ONE") 
    {
        control_address = ones_or_five;
        address_not_set = true;
    }

    function set_contract_of_Five(address fives) public
    {
        require(address_not_set); // make sures address is not reset
        fives_contract = Five(fives);
        address_not_set = false; // make sures address is not reset
    }

    function convert(address minted_to, uint256 amount) public{ 
        //burns ones
        _burn(minted_to, amount);
        uint256 new_amount = SafeMath.div(amount, 5);
        //mints fives
        fives_contract.mint(minted_to, new_amount);
    }

    function mint(address owner, uint256 amount) public 
    {
        _mint(owner, amount);
    }

    function burn(address owner, uint256 amount) public 
    {
        _burn(owner, amount);
    }
}

contract Five is ERC20
{
    address private control_address;
    bool private address_not_set;
    Ones private ones_contract;


    constructor(address ones_or_five) ERC20("Five", "FVE") 
    {
        control_address = ones_or_five;
        address_not_set = true;
    }

    
    function set_contract_of_Ones(address ones) public
    {
        require(address_not_set); // make sures address is not reset
        ones_contract = Ones(ones);
        address_not_set = false; // make sures address is not reset
    }

    function convert(address minted_to, uint256 amount) public{ 
        //burns ones
        _burn(minted_to, amount);
        uint256 new_amount = SafeMath.mul(amount, 5);
        //mints fives
        ones_contract.mint(minted_to, new_amount);
    }

    function mint(address owner, uint256 amount) public 
    {
        _mint(owner, amount);
    }

    function burn(address owner, uint256 amount) public 
    {

        _burn(owner, amount);
    }
}