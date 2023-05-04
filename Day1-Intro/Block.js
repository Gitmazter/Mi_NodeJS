// Common JS module

class Block {
    constructor({ timestamp, data, hash, lastHash}){
        this.timestamp = timestamp
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }

    // get transaction() {
    //     return this.data;
    // }

    // get currentHash() {
    //     return this.hash
    // }

    // get prevHash () {
    //     return this.lastHash
    // }


}

module.exports = Block;

// const demoBlock = new Block(
//     Date.now(), 
//     {
//         "tx": 1, 
//         "amt": 3, 
//         "from": "0x2154123", 
//         "to": "0x5328934"
//     }, 
//     "0000dawheh2131kj2h3kjh12k", 
//     "0000asydhas45r2gd9dsafg9g2"
//     )

// console.log(demoBlock);

// const demoBlock2 = new Block(
//     Date.now(), 
//     {
//         "tx": 1, 
//         "amt": 3, 
//         "from": "0x215fasdas", 
//         "to": "0x532fsdf4"
//     }, 
//     "0000423oj4nj3123jhn1lr3j2", 
//     "0000dawheh2131kj2h3kjh12k"
//     )

// console.log(demoBlock2);