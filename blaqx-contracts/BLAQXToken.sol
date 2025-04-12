// SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   contract BLAQXToken {
       string public name = "BLAQX";
       string public symbol = "BLAQX";
       uint256 public decimals = 18;
       uint256 public totalSupply = 5_000_000_000 * 10**decimals; // 5B

       mapping(address => uint256) public balances;
       mapping(address => address) public upline;

       uint256[5] public referralRates = [10, 10, 10, 10, 5]; // 3x5 matrix percentages

       constructor() {
           balances[msg.sender] = totalSupply;
       }

       function buyTokens(address _referral) external payable {
           uint256 tokens = msg.value / getCurrentPrice();
           balances[msg.sender] += tokens;
           _processReferral(_referral, tokens);
       }

       function _processReferral(address _referral, uint256 _amount) internal {
           address currentRef = _referral;
           for(uint i=0; i<5; i++){
               if(currentRef == address(0)) break;
               uint256 commission = _amount * referralRates[i] / 100;
               balances[currentRef] += commission;
               currentRef = upline[currentRef];
           }
       }
   }

// In BLAQXToken.sol  
address public constant FEE_WALLET = 0xYourAdminAddress;  

function withdrawFees() external {  
  require(msg.sender == FEE_WALLET, "Unauthorized");  
  payable(FEE_WALLET).transfer(address(this).balance);  
}  
