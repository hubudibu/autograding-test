const { calculateAge } = require('./calculateAge')

test('Életkor 2000-ben, 2022-es születéssel', () => {
  expect(calculateAge(2000, 2022)).toBe(0)
})
