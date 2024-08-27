/**
 * 从传入的字符串参数中删除所有非字母字符
 * @category String
 * @example
```ts
import { toLetters } from '@fish/utils'

toLetters('this is text') // thisistext
toLetters('123-Text!!!') // Text
```
 */
export default function toLetters(input: unknown): string {
  return String(input).replaceAll(/[^a-zA-Z]/gu, '')
}
