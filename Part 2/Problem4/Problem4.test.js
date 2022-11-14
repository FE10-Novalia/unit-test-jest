const palindrome = require('./Problem4')

describe('Palindrome', () => {
    it('Will return true if its palindrom', () => {
        expect(palindrome('civic')).toBe(true)
    })
    it('Will return false if its not palindrom', () => {
        expect(palindrome('kupu-kupu')).toBe(false)
    })
    it('Will return "Masukkan string" if its string', () => {
        expect(palindrome(23782374)).toBe('Masukkan string')
    })
    it('Will return "Masukkan string" if its string', () => {
        expect(palindrome(true)).toBe('Masukkan string')
    })
})


