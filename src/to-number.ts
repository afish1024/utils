/**
 * 将传入的参数作为数字返回，不能转换成数字则返回 0
 * @category Number
 * @example
```ts
import { toNumber } from '@fish/utils'

toNumber('this is text') // 0
toNumber('3') // 3
toNumber(0.4) // 0.4
toNumber(new Set([])) // 0
```
 */
export default function toNumber(input: unknown): number {
  try {
    const number = Number(input)

    if (Number.isNaN(number)) {
      return 0
    }

    return number
  } catch {
    return 0
  }
}
