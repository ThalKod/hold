pragma solidity ^0.4.17;

contract lockedWallet{
    
    address public receiverAddress;
    address public creatorAddress;
    uint public endLockedTime;
    uint public createdAt = now;
    
    constructor(address receiver, uint timestamp) public{
        require(timestamp > now, "past timestamp");
        receiverAddress = receiver;
        endLockedTime = timestamp;
        creatorAddress = msg.sender;
    }
    
    function () public payable {}
    
    
    function widthdraw() onlyReceiver public{
        require(now >= endLockedTime, "time not yet elapsed");
        msg.sender.transfer(address(this).balance);
    }
    
    function getInfo() public view returns(uint, address, address, uint, uint){
        return(address(this).balance, creatorAddress, receiverAddress, endLockedTime, createdAt);
    }

    modifier onlyReceiver{
        require(msg.sender == receiverAddress, "must be the receiver");
        _;
    }

}