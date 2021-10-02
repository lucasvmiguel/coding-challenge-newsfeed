import { limitQueryParam, offsetQueryParam } from './index'

it('should return correct limit', () => {
  const tests = [
    {
      param: 8,
      expected: 8
    },
    {
      param: 1000,
      expected: 10
    },
    {
      param: -10,
      expected: 10
    },
    {
      param: 2.4,
      expected: 10
    },
  ]

  tests.forEach(test => {
    expect(limitQueryParam(test.param)).toBe(test.expected)
  })
})

it('should return correct offset', () => {
  const tests = [
    {
      param: 8,
      expected: 8
    },
    {
      param: -10,
      expected: 0
    },
    {
      param: 2.4,
      expected: 0
    },
  ]

  tests.forEach(test => {
    expect(offsetQueryParam(test.param)).toBe(test.expected)
  })
})