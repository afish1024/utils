import { expect, test } from 'vitest'

import checkBrowser from './check-browser.js'

test('isBrowser is true', () => {
  // @ts-expect-error -- TS doesn't like this override
  const originalWindow = global.window
  // @ts-expect-error -- TS doesn't like this override
  const originalDocument = global.document

  // @ts-expect-error -- TS doesn't like this override
  global.window = {}
  // @ts-expect-error -- TS doesn't like this override
  global.document = {}
  expect(checkBrowser()).toBe(true)
  
  // @ts-expect-error -- TS doesn't like this override
  global.window = originalWindow
  // @ts-expect-error -- TS doesn't like this override
  global.document = originalDocument
})

test('isBrowser is false', () => {
  expect(checkBrowser()).toBe(false)
})
