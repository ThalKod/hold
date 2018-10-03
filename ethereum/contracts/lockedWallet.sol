pragma solidity ^0.4.17;


contract FactoryWallet{
    address[] public listOfWallets;
    
    struct  Wallet {
        address[]  listOfWalletsAvailable;
    }
    
    mapping (address => Wallet) wallets ;
    
    
    function createWallet(address receiver, uint timestamp) public payable{
        address newWallet = new LockedWallet(msg.sender, receiver, timestamp);
        if(msg.value > 0){
            address(newWallet).transfer(msg.value);
        }
        
        address[] wallet = wallets[receiver].listOfWalletsAvailable;
        
        wallet.push(newWallet);
        
        listOfWallets.push(newWallet);
    }
    
    function getWallets() public view returns(address[]){
        return listOfWallets;
    }
    
    function getWalletsByReceiver(address receiverAddress) public view returns(address[]){
        return wallets[receiverAddress].listOfWalletsAvailable;
    }
}

contract LockedWallet{
    
    address public receiverAddress;
    address public creatorAddress;
    uint public endLockedTime;
    uint public createdAt = now;
    
    constructor(address creator, address receiver, uint timestamp) public{
        require(timestamp > now, "past timestamp");
        receiverAddress = receiver;
        endLockedTime = timestamp;
        creatorAddress = creator;
    }
    
    function () public payable {}
    
    
    function widthdraw() public{
        require(now >= endLockedTime, "time not yet elapsed");
        receiverAddress.transfer(address(this).balance);
    }
    
    function getInfo() public view returns(uint, address, address, uint, uint){
        return(address(this).balance, creatorAddress, receiverAddress, endLockedTime, createdAt);
    }
    
}