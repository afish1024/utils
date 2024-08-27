/**
 * 检查当前代码是否在浏览器中运行
 * @category Environment
 * @example
```ts
import { checkBrowser } from '@fish1024/utils'

checkBrowser() // true
```
 */
export default function checkBrowser(): boolean {
  // @ts-expect-error -- TS doesn't like this override
  if (typeof global.window === 'object' && typeof global.document === 'object') {
    return true
  }

  return false
}
