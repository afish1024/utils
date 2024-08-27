/**
 * 检查数组项是否唯一。对于非数组的任何值将返回 true。
 * @category Array
 * @example
```ts
import { hasUnique } from '@balac/utils'

hasUnique([1, 2, 3]) // true
hasUnique([1, 1, 2]) // false
hasUnique('not array') // true
```
 */
export function hasUnique(input: unknown): boolean {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length
  }

  return true
}
