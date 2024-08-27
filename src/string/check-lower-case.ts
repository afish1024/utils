/**
 * 检查传入的字符串参数是否包含大写字母，包含大写字母、非字符串返回 false
 * @category String
 * @example
```ts
import { checkLowerCase } from '@fish1024/utils'

checkLowerCase('this is lower') // true
checkLowerCase('This is not LOWER') // false
checkLowerCase(123) // false - input is not a string
```
 */
export default function checkLowerCase(input: unknown): input is string {
  if (typeof input !== 'string') {
    return false
  }

  return input === input.toLowerCase()
}
