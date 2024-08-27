/**
 * 检查传入的字符串参数是否包含空格，非字符串、带空格返回 false
 * @category String
 * @example
```ts
import { hasCompactCase } from '@fish/utils'

hasCompactCase('thisiscompact') // true
hasCompactCase('this is not compact') // false
hasCompactCase(123) // false - input is not a string
```
 */
export function hasCompactCase(input: unknown): input is string {
  if (typeof input !== 'string') {
    return false
  }

  if (input.length === 0) {
    return true
  }

  return /^\S+$/u.test(input)
}
