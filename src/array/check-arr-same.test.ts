import { expect, test } from 'vitest'

import checkArrSame from './check-arr-same.js'

// should return false when array does not contain unique items
test('输入的两个数组相同应该返回 true', () => {
  expect(checkArrSame(['1', '2'], [2, 1])).toBe(false)
  expect(checkArrSame([1, 2], [2, 1])).toBe(true)
  expect(checkArrSame(['', NaN, null, undefined], [0, undefined, false, {}])).toBe(false)
})

// should return true when array contains only unique items
test('输入的两个数组相同应该返回 false', () => {
  expect(checkArrSame(['one', 1], [1, 2])).toBe(false)
})
