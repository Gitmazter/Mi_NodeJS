const Block = require('./Block');

class Blockchain {
  constructor() {
    this.chain = [Block.Genesis()];
  }

  addBlock({ data }) {
    const addedBlock = Block.mineBlock({ lastBlock: this.chain.at(-1), data });
    this.chain.push(addedBlock);
  }
}

module.exports = Blockchain;