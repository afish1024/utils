import toNumber from '../number/to-number.js'

/**
 * 暂停当前函数
 * @category Misc
 * @example
```ts
import { sleep } from '@fish1024/utils'

await sleep(2000) // 暂停 2 秒
await sleep("abc") // 传人非数字的参数，暂停 0 秒
```
 */
export default function sleep(milliseconds: number): Promise<void> {
  const input = milliseconds as unknown

  const ms = toNumber(input)

  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
