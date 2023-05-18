var TxData = require('./TxData')

describe('TxData', () => {
    let time = Date.now()
    let sender = "0xBA23FFb7f86001F69266B56809E2Ef32d8287545"
    let receiver = "0xBA23FFb7f86100F69266B56809E2Ef32d8287545"
    let amount = 0.0034123
    let type = "transfer"


    let data = new TxData(time, sender, receiver, amount, type)
    console.log(data.type);

    it('should be a class object of TxData ', () => {
        expect(data instanceof TxData).toBe(true)
    });

    it('should have a timestamp', () => {
        expect(data.timestamp > 1683711570).toBe(true)
    });

    it('should have a receiver', () => {
        expect(data.receiver.length).toEqual(42)
    });

    it('should have a sender', () => {
        expect(data.sender.length).toEqual(42)
    });

    it('should have an amount', () => {
        expect(isNaN(data.amount)).toBe(false)
    });

    it('should have a type', () => {
        expect(data.type).toBeDefined()
    });
})