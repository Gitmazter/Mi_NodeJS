const BlockChain = require("./BlockChain");

let chain = new BlockChain

const tx = {"from": "0xj3541h23jl", "to": "0x432235g2341" , "amount": 0.432}

chain.addBlock('cookie')
chain.addBlock(tx)

console.log(chain);

console.log(chain.blocks[2].data);