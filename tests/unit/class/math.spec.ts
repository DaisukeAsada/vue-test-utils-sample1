import { CustomCalculator } from '@/classes/math'

describe('cals test', () => {
  test('1 + 1', () => {
    const calc = new CustomCalculator(1, 1)
    expect(calc.plus()).toEqual(2)
  })
})
