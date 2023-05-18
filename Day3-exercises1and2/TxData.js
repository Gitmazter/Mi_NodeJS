class TxData {
    constructor(time, sender, receiver, amount, type){
        this.timestamp = time
        this.sender = sender
        this.receiver = receiver
        this.amount = amount
        this.type = type
    }
}

module.exports = TxData