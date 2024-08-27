/**
 * 检查当前代码是否在浏览器中运行
 * @category Environment
 * @example
```ts
import { hasRunningInBrowser } from '@balac/utils'

hasRunningInBrowser() // true
```
 */
export function hasRunningInBrowser(): boolean {
  if (typeof window === 'object' && typeof document === 'object') {
    return true
  }

  return false
}
