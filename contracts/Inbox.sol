pragma solidity ^0.4.17;

contract Inbox {

    string public message;

    function Inbox(string intitialMessage) public{
        message = intitialMessage;
    }

    function setMessage(string newMessage) public{
        message = newMessage;
    }
    
}