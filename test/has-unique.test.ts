import { expect, test } from 'vitest'

import { hasUnique } from '../src/has-unique.js'

// should return false when array does not contain unique items
test('当数组包含重复项时应该返回 false', () => {
  expect(hasUnique(['', ''])).toBe(false)
  expect(hasUnique([1, 1])).toBe(false)
})

// should return true when array contains only unique items
test('当数组项不重复时应该返回 true', () => {
  expect(hasUnique(['one', 1])).toBe(true)
  expect(hasUnique([1, 2])).toBe(true)
  expect(hasUnique(1)).toBe(true)
  expect(hasUnique([])).toBe(true)
})

test('当传入非数组时应该返回 true', () => {
  expect(hasUnique('')).toBe(true)
  expect(hasUnique(false)).toBe(true)
  expect(hasUnique({})).toBe(true)
})
