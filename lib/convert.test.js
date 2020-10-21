const convert = require('./convert')

test('convert cotacao 4 and quantidade 4', () => {
    expect(convert.convert(4,4)).toBe(16)
})

test('convert cotacao 0 and quantidade 4', () => {
    expect(convert.convert(0,4)).toBe(0)
})

test('money converts float', () => {
    expect(convert.money(2)).toBe('2.00')
})

test('money converts string', () => {
    expect(convert.money(2)).toBe('2.00')
})