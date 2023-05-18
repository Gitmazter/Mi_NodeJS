const Block = require("./Block.js");
const Blockchain = require("./BlockChain.js");
const TxData = require("./TxData.js");

let chain = new Blockchain()
let data = new TxData(
    Date.now(), 
    "0xBA23FFb7f86001F69266B56809E2Ef32d8287545",
    "0xBA23FFb7f86100F69266B56809E2Ef32d8287545",
    0.0034123,
    "transfer"
)

chain.addBlock({data})

chain.addBlock({data})

console.log(chain.chain);
