const { describe } = require('yargs')
const joinArrayRemoveDuplicate = require('./Problem2')

test('will return unique array', () => { 
    expect(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
    .toEqual(["apel", "anggur", "lemon", "leci", "nanas"])
 })
test('will return unique array', () => { 
    expect(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
    .toEqual( ["samsung", "apple", "sony", "xiaomi"])
 })
test('will return unique array', () => { 
    expect(joinArrayRemoveDuplicate("samsung", ['apple', 'sony', 'samsung']))
    .toEqual('invalid')
 })
test('will return unique array', () => { 
    expect(joinArrayRemoveDuplicate(971387189, true))
    .toEqual('invalid')
 })