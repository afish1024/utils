import { expect, test } from 'vitest'

import checkCompactCase from './check-compact-case.js'

const falsey = [
  123,
  '  leadingSpace',
  '  twoLeadingSpaces',
  'trailingSpace ',
  'twoTrailingSpace  ',
  'space inside',
  'twoSpaces  inside',
  'regular sentence of words',
  '  all the  problems  ',
  '\r\n\t\f\v',
  `
        `,
]

test.each(falsey)('%s is falsey', (input: unknown) => {
  expect(checkCompactCase(input)).toBe(false)
})

const truthy = [
  '',
  'justletters',
  '123',
  'mixed123',
  'hyphenated-123',
  'special!@@£$%^%^*(-123',
]

test.each(truthy)('%s is truthy', (input: string) => {
  expect(checkCompactCase(input)).toBe(true)
})
