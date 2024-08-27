/**
 * 检查是否输入参数是否偶数
 * @category Number
 * @example
```ts
import { checkEven } from '@fish1024/utils'

checkEven(-4)   // true
checkEven(-1)   // false
checkEven(0)    // true
checkEven(1)    // false
checkEven(2)    // true
checkEven(5)    // false
checkEven(9)    // false
checkEven(3.14) // false
```
 */
export default function checkEven(input: unknown): input is number {
    if (typeof input !== 'number' || !Number.isInteger(input)) return false
  
    return input % 2 === 0
  }