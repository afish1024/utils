import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

let entries: Array<string> = []

getUtilFiles(path.join(__dirname, './src'))

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
        entries.push(dirpath)
      }
    })
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // entry: {
      //   index: resolve(__dirname, 'src/index.ts'),
      //   'get-integers': resolve(__dirname, 'src/get-integers.ts'),
      // },
      entry: entries
    }
  },
})
