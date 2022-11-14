
const faktorBilangan = require('./Problem2')

describe('Faktor Bilangan', () => {
    it('return faktor from the number', () => {
        expect(faktorBilangan(6)).toEqual([1,2,3,6])
    })
    it('return faktor from the number', () => {
        expect(faktorBilangan(20)).toEqual([1,2,4,5,10,20])
    })
    it('return faktor from the number', () => {
        expect(faktorBilangan(2)).toEqual([1,2])
    })
})