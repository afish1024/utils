import fs from 'fs'
import path from 'path'
import { expect, test } from 'vitest'

import * as all from './index.js'

let filenames: Array<string> = []
let entries: Array<string> = []

getUtilFiles(path.join(__dirname, '../src'))

function getUtilFiles(_path: string) {
  fs
    .readdirSync(_path)
    .forEach(n => {
      const dirpath = path.join(_path, n)
      const stat = fs.statSync(dirpath)

      // 判断是否为目录
      if (stat.isDirectory()) {
        return getUtilFiles(dirpath)
      }
      if (
        // Do not count the index file
        n !== 'index.ts' &&
        // Do not count the .d.ts file
        !n.endsWith('.d.ts') &&
        // Do not count files that should be ignored
        !n.startsWith('_') &&
        // Do not count tests
        !n.includes('.test.') &&
        // Do not count benchmark tests
        !n.includes('.bench.') &&
        // Do not count hidden files, e.g. .DS_Store
        !n.startsWith('.')
      ) {
        const name = n.replace(/\.ts$/gi, '')
        filenames.push(name)
        entries.push(dirpath)
      }
    })
}

console.log('======== dir', entries)

const camelToKebab = (string_: string): string =>
  string_.replaceAll(/([\da-z])([A-Z])/gu, '$1-$2').toLowerCase()

const utils = Object.keys(all).map(camelToKebab)

test('index exports all utils', () => {
  expect(all.checkArrSame(filenames, utils)).toBe(true)
})
