//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleTree {
    bytes32 public rootHash = 0xb3e487a5d294d3a8f03a56e557263e45788e56088d1031392f35cf1a41f39221;
    string[] public data;

    function addData(string[] memory _data) public {
        data = _data;
    }

    function merkleProof(bytes32[] memory _merkleProof) public view returns(bool, bytes32){
        bytes32 leafhash = keccak256(abi.encodePacked(data[0]));
        return (MerkleProof.verify(_merkleProof, rootHash , leafhash), leafhash);
    }
}


//["ABC", "DEF", "GHI", "JKL", "MNO", "PQR"]

// [
//   "0xf7ba25e4cb13d1cac1dffb5044ac9001438eb1251b07a484fbe3428bc825099b",
//   "0x684bd3f787e80b6b444bc3e994604029d4ec56f8e1d45f7c6a4fc60f1896843f",
//   "0x57005bba35c15eb349b7e5c5be2c4eb5bd4f3b6441c050bb9ecc4d279a80f072"
// ]