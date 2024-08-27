/**
 * 检查数组项是否唯一。对于非数组的任何值将返回 true。
 * @category Array
 * @example
```ts
import { checkUnique } from '@fish1024/utils'

checkUnique([1, 2, 3]) // true
checkUnique([1, 1, 2]) // false
checkUnique('not array') // true
```
 */
export default function checkUnique(input: unknown): boolean {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length
  }

  return true
}
