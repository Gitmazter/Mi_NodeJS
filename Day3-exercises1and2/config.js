const TxData = require("./TxData");

const GENESIS_DATA = {
    timestamp: 1,
    data: new TxData(1, '1', '1', 1 ,'1'),
    hash: '#gen',
    lastHash: '#pregen',
  };
  
  module.exports = GENESIS_DATA;