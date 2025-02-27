// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MedicalRecords {
    struct Record {
        string ipfsHash;
        address owner;
    }

    mapping(address => Record[]) public records;

    event RecordAdded(address indexed user, string ipfsHash);

    function addMedicalRecord(string memory _ipfsHash) public {
        records[msg.sender].push(Record(_ipfsHash, msg.sender));
        emit RecordAdded(msg.sender, _ipfsHash);
    }

    function getRecords() public view returns (Record[] memory) {
        return records[msg.sender];
    }
}
