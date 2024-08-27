/**
 * 检查传入的值是否为有效的日期
 * @category Date
 * @example
```ts
import { checkDate } from '@fish1024/utils'

checkDate(new Date()) // true
checkDate("not a date") // false
```
 */
export default function checkDate(input: unknown): input is Date {
    return input instanceof Date && input?.toString() !== 'Invalid Date'
  }