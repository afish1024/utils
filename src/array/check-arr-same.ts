/**
 * 检查两个字符串数组是否相同
 * @category Array
 * @example
```ts
import { checkUnique } from '@fish1024/checkEqual'

checkArrSame([1, 2, 3], [2, 1, 3]) // true
checkUnique(['', NaN, null, undefined], [0, undefined, false, {}]) // false
```
 */
export default function checkArrSame(input1: Array<unknown>, input2: Array<unknown>): boolean {
    // 数组合并
    const sumArr = [...input1, ...input2];
    // 数组去重
    const newArr = [...new Set(sumArr)];
    // 根据数组长度对比返回结果
    return [...new Set(input1)].length === newArr.length;
}
