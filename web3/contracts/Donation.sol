// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// implement ZKaptcha anti-bot in your smart contract
interface ZKaptchaInterface {
	function verifyZkProof(
		 bytes calldata zkProof
	) external view returns (bool);
}

contract Donation is ERC721URIStorage {
    constructor() {}


    uint256 public tokenCounter;
    uint256 public constant NFT_PRICE = 0.0001 ether;
    address public owner;
    uint256 public constant MAX_TOKENS = 1000;
    
    // DECLARE THE INTERFACE VARIABLE
    ZKaptchaInterface zkaptcha;

    constructor() public ERC721("Donation Appreciation NFTs", "PHIL") {
        tokenCounter = 0;
        owner = msg.sender;
        
        // INSTANTIATE THE INTERFACE
        zkaptcha = ZKaptchaInterface.at("0xf5DCa59461adFFF5089BE5068364eC10B86c2a88"); 
    }
    
    function mint(
        string memory tokenURI,
        bytes32[] memory proof
    ) public {
        // CHECK IF THE CAPTCHA IS VALID 
        require(zkaptcha.verifyZkProof(proof));
        
        // Do your standard checks for availability and price 
        require(tokenCounter < MAX_TOKENS, "Max number of tokens reached");
        require(NFT_PRICE <= msg.value, "Ether value sent is not correct");

        uint256 tokenId = tokenCounter;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        tokenCounter++;
    }
}