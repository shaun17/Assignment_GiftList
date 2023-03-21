const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const merkletree = new MerkleTree(niceList);
  const root = merkletree.getRoot();
  let index = 10;
  const proof = merkletree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: proof,
    leaf : niceList[10]
  });

  console.log({ gift });
}

main();