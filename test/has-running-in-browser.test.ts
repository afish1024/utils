import { expect, test } from 'vitest'

import { hasRunningInBrowser } from '../src/has-running-in-browser.js'

test('isBrowser is true', () => {
  const originalWindow = global.window
  const originalDocument = global.document
  // @ts-expect-error -- TS doesn't like this override
  global.window = {}
  // @ts-expect-error -- TS doesn't like this override
  global.document = {}
  expect(hasRunningInBrowser()).toBe(true)
  global.window = originalWindow
  global.document = originalDocument
})

test('isBrowser is false', () => {
  expect(hasRunningInBrowser()).toBe(false)
})
