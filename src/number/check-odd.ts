/**
 * 检查输入参数是否为奇数
 * @category Number
 * @example
```ts
import { checkOdd } from 'tings'

checkOdd(-4)   // false
checkOdd(-1)   // true
checkOdd(0)    // false
checkOdd(1)    // true
checkOdd(2)    // false
checkOdd(5)    // true
checkOdd(9)    // true
checkOdd(3.14) // false
```
 */
export default function checkOdd(input: unknown): input is number {
    if (typeof input !== 'number' || !Number.isInteger(input)) return false
  
    return input % 2 !== 0
  }