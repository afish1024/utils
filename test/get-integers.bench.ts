import { bench } from 'vitest'

import getIntegers from '../src/get-integers.js'

bench('set of 100 integers', () => {
  getIntegers(-50, 50)
})
