const meanMedian = require('./Problem4')

describe('Mean Median', () => {
    it('Will return the value of mean and median if all array was integer', () => {
        expect(meanMedian([1,2,3,4])).toEqual([2.5, 2.5])
    })
    it('Will return the value of mean and median if all array was integer', () => {
        expect(meanMedian([15,20,30,60,120])).toEqual([49, 30])
    })
    it('Will return "All Array must be integer" if not every array was integer', () => {
        expect(meanMedian([1,2,'saya',4])).toEqual('All Array must be integer')
    })
    it('Will return "All Array must be integer" if not every array was integer', () => {
        expect(meanMedian([1,true,'saya',4, {nama : 'nova'}])).toEqual('All Array must be integer')
    })
})
