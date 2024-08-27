/**
 * 检查传入的 URL 字符串参数是否以协议开头来确定它是否是绝对路径，非字符串将返回 false
 * @category String
 * @example
```ts
import { hasUrlAbsolute } from '@fish/utils'

hasUrlAbsolute("http://example.com/page") // true
hasUrlAbsolute("/page") // false
hasUrlAbsolute(123) // false - input is not a string
```
 */
export default function hasUrlAbsolute(url: unknown): boolean {
  if (typeof url !== 'string') return false
  // regex sourced from https://stackoverflow.com/a/19709846
  return /^(?:[+a-z]+:)?\/\//iu.test(url)
}
