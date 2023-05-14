const { Blockchain } = require('./blockchain')
const {Block} = require('./block')
let chain = new Blockchain();

chain.addBlock(new Block("5/14/2023", {amount: 5}));
chain.addBlock(new Block("5/13/2023", {amount: 10}));

console.log(JSON.stringify(chain, null, 4));
console.log("Is blockchain valid? " + chain.checkValid());