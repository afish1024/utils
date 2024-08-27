import { expect, test } from 'vitest'

import hasLowerCase from '../src/has-lower-case.js'

const falsey = ['Title Case', 'camelCase', 'PascalCase', []]

test.each(falsey)('%s is false', (input) => {
  expect(hasLowerCase(input)).toBe(false)
})

const truthy = [
  'lowercase',
  'lower case',
  '',
  `
`,
]

test.each(truthy)('%s is true', (input) => {
  expect(hasLowerCase(input)).toBe(true)
})
