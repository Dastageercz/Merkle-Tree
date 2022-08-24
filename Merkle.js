const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const leavess = []
for (let i = 0; i < 4; i++) {
    leavess[i] = '' + i //i.toString();
}
const leaves = leavess.map(x => keccak256(x))
console.log("******Leaves****");
leaves.map(x => console.log(x.toString("hex")));
console.log("******Leaves****");
const tree = new MerkleTree(leaves, keccak256,{sort: true})
const root = tree.getRoot().toString('hex')
const leaf = keccak256('0')
const proof = tree.getProof(leaf)
console.log(tree.verify(proof, leaf, root)) // true
console.log(root)
console.log("*********************")
console.log(leaf.toString('hex'))
console.log("*************************")
console.log(proof);
console.log("*********** Proof path **************");
proof.map(x => console.log(x.data.toString("hex")));
console.log("*************************")
console.log(tree.toString("hex"))