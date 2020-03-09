pragma solidity ^0.5.12;


//Ceth contract is an abstract contract that is needed to use compoundCommunication contract
contract CEth 
{
  function mint() external payable;
  function balanceOf(address owner) external view returns (uint256);
  function redeem(uint redeemTokens) external returns (uint);
  
}

//########################################################
//####   Compound communication Functions           ######
//########################################################
//This contract has all the compound communication functions
contract compoundCommunication
{
  //  -- ! Address for ropsten ! --
  address payable public ethCompound = address(0x1d70B01A2C3e3B2e56FcdcEfe50d5c5d70109a5D);
    //Send all Eth own by the contract to Compound
  function sendToCompound() public returns (bool check)
  {
      CEth(ethCompound).mint.value(address(this).balance).gas(250000)();
      return true;
  }
  // Get Back all money from Compound: 
  function getBackFromCompound() public returns (bool check)
  {
      CEth(ethCompound).redeem.gas(250000)(getBalance_cToken());
      return true;
  }
  //See how much cEth we own 
  function getBalance_cToken() public view returns (uint){return CEth(ethCompound).balanceOf(address(this));}
  //Able me to see how much eth the contract own
  function getBalance_Token()public view returns (uint){return address(this).balance;}
}

//########################################################
//####   MAIN CONTRACT                              ######
//########################################################
//This is the main contract that will contain the main functions 
contract smartCaution is compoundCommunication
{

  uint amount;
  constructor() public payable{}
  //fallback fucntion
  function () external payable {}

  //Send Back money to anybody who is asking
  function giveBackToYou() public returns (bool check){address(msg.sender).transfer(address(this).balance);return true;}
}

//Created by Tfrx1er
//Special Thanks to 5fiftyseven7 on the Compound discord that helped me