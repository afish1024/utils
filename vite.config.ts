import { defineConfig } from 'vite'
import fs from 'fs'
import { resolve, join } from 'path'

const filenames = fs
  .readdirSync(join(__dirname, './src'))
  .filter(
    (n) =>
      // Do not count the index file
      // n !== 'index.ts' &&
      // Do not count the .d.ts file
      !n.endsWith('.d.ts') &&
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

console.log(filenames)
let entries = {}

filenames.forEach(filename => {
  entries[filename] = resolve(__dirname, `src/${filename}.ts`)
})


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
