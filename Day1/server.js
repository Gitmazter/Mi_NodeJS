// var Block = require('./Block')

// const myBlock = new Block(
//     Date.now(),
//     '{id:1, amount:100}',
//     '0x3f4f23ff1',
//     '0x34j123hd8'
//     )

// console.log(myBlock.time);
// console.log(myBlock.prevHash);
// console.log(myBlock.currentHash);
// console.log(myBlock.transaction);

const BlockChain = require("./BlockChain");

const chain = new BlockChain();

chain.addBlock({'from': "0x151234124", "to": "0xjni2j1b34kj", "amount": '0.312421'})
chain.addBlock({'from': "0xf13243trf", "to": "0xf42t23ds32d", "amount": '0.632421'})
chain.addBlock({'from': "0xh45fr2g43", "to": "0xj523fcdgf5j", "amount": '0.733421'})

console.log(chain.transactions[0].transaction);
console.log(chain.transactions[1].transaction);
console.log(chain.transactions[2].transaction);
