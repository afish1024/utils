import { toNumber } from './to-number.js'

/**
 * 如果可能，将数字转换为其序数字符串形式，否则返回第 0 个。
 * - 1 -> 1st
 * - 4.2 -> 4.2th
 * - notANumber -> 0th
 * @category Number
 * @example
```ts
import { toOrdinal } from '@fish/utils'

toOrdinal('this is text') // 0th
toOrdinal('3') // 3rd
toOrdinal('11') // 11th
toOrdinal(3.14) // 3.14th
```
 */
export function toOrdinal(input: unknown = 0): string {
  const number = toNumber(input)
  const isInt = Number.isInteger(number)

  if (isInt) {
    if (String(number).endsWith('1') && number !== 11) {
      return `${number}st`
    }

    if (String(number).endsWith('2') && number !== 12) {
      return `${number}nd`
    }

    if (String(number).endsWith('3') && number !== 13) {
      return `${number}rd`
    }
  }

  return `${number}th`
}
