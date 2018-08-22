pragma solidity ^0.4.17;


contract FactoryWallet{
    address[] public listOfWallets;
    
    function createWallet(address receiver, uint timestamp) public{
        address newWallet = new LockedWallet(msg.sender, receiver, timestamp);
        
        listOfWallets.push(newWallet);
    }
    
    function getWallets() public view returns( address[]){
        return listOfWallets;
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
    
    
    function widthdraw() onlyReceiver public{
        require( now >= endLockedTime, "time not yet elapsed");
        msg.sender.transfer(address(this).balance);
    }
    
    function getInfo() public view returns(uint, address, address, uint, uint){
        return(address(this).balance, creatorAddress, receiverAddress, endLockedTime, createdAt);
    }
    
    function isReceiver() public view returns(bool){
        return msg.sender == receiverAddress;
    }

    modifier onlyReceiver{
        require(msg.sender == receiverAddress, "must be the receiver");
        _;
    }
    
    
}