import { expect, test } from 'vitest'

import { hasUrlAbsolute } from '../src/has-url-absolute.js'

test.each([
  ['http://example.com/page', true],
  ['/page', false],
  [123, false],
])('%s is %s', (input, expected) => {
  expect(hasUrlAbsolute(input as string)).toBe(expected)
})
