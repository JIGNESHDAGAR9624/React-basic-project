// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Transfer {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    event transaction(address to, uint amount);



    function getOwnerAdd() public view returns(address) {
    return owner;
    }

    function _transfer(address payable _to) public payable {
        _to.transfer(msg.value);
        emit transaction(_to, msg.value);
    }
}
