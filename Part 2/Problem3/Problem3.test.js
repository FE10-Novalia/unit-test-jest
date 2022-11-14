const { exportAllDeclaration } = require('@babel/types')
const primeNumber = require('./Problem3')

test('If its prime number it will return true', () => { 
    expect(primeNumber(13)).toBe(true)
 })
test('If its not prime number it will return false', () => { 
    expect(primeNumber(35)).toBe(false)
 })
test('If its 1 it will return "ini bilangan asli"', () => { 
    expect(primeNumber(1)).toBe('Satu adalah bilangan asli')
 })
test('If its negative number it will return invalid', () => { 
    expect(primeNumber(-35)).toBe('invalid')
 })
