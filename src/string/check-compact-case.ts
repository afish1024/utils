/**
 * 检查传入的字符串参数是否包含空格，非字符串、带空格返回 false
 * @category String
 * @example
```ts
import { checkCompactCase } from '@fish1024/utils'

checkCompactCase('thisiscompact') // true
checkCompactCase('this is not compact') // false
checkCompactCase(123) // false - input is not a string
```
 */
export default function checkCompactCase(input: unknown): input is string {
  if (typeof input !== 'string') {
    return false
  }

  if (input.length === 0) {
    return true
  }

  return /^\S+$/u.test(input)
}
