/**
 * 生成一个从给定数字到另一个数字的整数数组。
 * @category Array
 * @example
```ts
import { getIntegers } from '@fish1024/utils'

getIntegers(1, 6) // [1, 2, 3, 4, 5, 6]
getIntegers("abc", 6) // [] - 有一个参数不是数字
```
 */
export default function getIntegers(from: unknown, to: unknown): number[] {
  if (typeof from !== 'number' || typeof to !== 'number') {
    return []
  }

  const fromTrunc = Math.trunc(from)
  const toTrunc = Math.trunc(to)

  const step = fromTrunc < toTrunc ? 1 : -1
  const length = Math.abs(toTrunc - fromTrunc) + 1

  // Construct the array with slots first, as this is more performant than
  // adding to the array on each iteration below.
  // eslint-disable-next-line unicorn/no-new-array -- this method is much more performant than Unicorn's suggested method of `Array.from({length})`.
  const list = new Array(length)

  // `for` and `while` loops are much faster than using array methods.
  for (let index = 0; index < length; index = index + 1) {
    list[index] = fromTrunc + index * step
  }

  return list
}
