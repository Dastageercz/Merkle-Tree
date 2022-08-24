const {MerkleTree} = require('merkletreejs')
const keccak = require('keccak256')

const data = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQR"]
const leaves = data.map(x => keccak(x))
// console.log(leaves);

const tree = new MerkleTree(leaves, keccak, {sortPairs: true})
console.log(tree.toString())


const proof = tree.getHexProof(leaves[0])
console.log(proof)