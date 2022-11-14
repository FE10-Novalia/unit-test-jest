const removeDuplicates = require('./Problem3')

describe('Remove Duplicate', () => {
    it('Will return unique array length if the parameter was array',() => {
        expect(removeDuplicates([2, 3, 3, 3, 6, 9, 9])).toBe(4)
    })
    it('Will return unique array length if the parameter was array',() => {
        expect(removeDuplicates([2, 2, 2, 11])).toBe(2)
    })
    it('Will return "Invalid Array" if the parameters was not an array',() => {
        expect(removeDuplicates(932787)).toBe('Invalid Array')
    })
    it('Will return "Invalid Array" if the parameters was not an array',() => {
        expect(removeDuplicates(false)).toBe('Invalid Array')
    })

})