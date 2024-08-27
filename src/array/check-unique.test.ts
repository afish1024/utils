import { expect, test } from 'vitest'

import checkUnique from './check-unique.js'

// should return false when array does not contain unique items
test('当数组包含重复项时应该返回 false', () => {
  expect(checkUnique(['', ''])).toBe(false)
  expect(checkUnique([1, 1])).toBe(false)
})

// should return true when array contains only unique items
test('当数组项不重复时应该返回 true', () => {
  expect(checkUnique(['one', 1])).toBe(true)
  expect(checkUnique([1, 2])).toBe(true)
  expect(checkUnique(1)).toBe(true)
  expect(checkUnique([])).toBe(true)
})

test('当传入非数组时应该返回 true', () => {
  expect(checkUnique('')).toBe(true)
  expect(checkUnique(false)).toBe(true)
  expect(checkUnique({})).toBe(true)
})
