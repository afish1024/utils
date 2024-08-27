/**
 * 从传入字符串参数中删除所有空白字符。
 * @category String
 * @example
```ts
import { toCompactCase } from '@fish1024/utils'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```
 */
export default function toCompactCase(input: unknown): string {
  return String(input).replaceAll(/\s/gu, '')
}
