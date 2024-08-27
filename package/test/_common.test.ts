import fs from 'fs'
import path from 'path'
import { expect, test } from 'vitest'

import * as all from '../source/index'

const filenames = fs
  .readdirSync(path.join(__dirname, '../source'))
  .filter(
    (n) =>
      // Do not count the index file
      n !== 'index.ts' &&
      // Do not count files that should be ignored
      !n.startsWith('_') &&
      // Do not count tests
      !n.includes('.test.') &&
      // Do not count benchmark tests
      !n.includes('.bench.') &&
      // Do not count hidden files, e.g. .DS_Store
      !n.startsWith('.'),
  )
  .map((f) => f.split('.')[0])

const camelToKebab = (string_: string): string =>
  string_.replaceAll(/([\da-z])([A-Z])/gu, '$1-$2').toLowerCase()

const utils = Object.keys(all).map(camelToKebab)

test('index exports all utils', () => {
  expect(filenames.length).toBe(utils.length)
  // expect(filenames).toEqual(utils)
})
