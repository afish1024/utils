# 使用

## getIntegers

<span class="VPButton medium brand">哈哈哈</span>

<span aria-label="in Array category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Array</span>
生成一个从给定数字到另一个数字的整数数组。

```ts
import { getIntegers } from '@fish/utils'

getIntegers(1, 6) // [1, 2, 3, 4, 5, 6]
getIntegers("abc", 6) // [] - 有一个参数不是数字
```

## hasUnique

<span aria-label="in Array category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Array</span>
检查数组项是否唯一。对于非数组的任何值将返回 true。

```ts
import { hasUnique } from '@fish/utils'

hasUnique([1, 2, 3]) // true
hasUnique([1, 1, 2]) // false
hasUnique('not array') // true
```

## hasCompactCase

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
检查传入的字符串参数是否包含空格，非字符串、带空格返回 false

```ts
import { hasCompactCase } from '@fish/utils'

hasCompactCase('thisiscompact') // true
hasCompactCase('this is not compact') // false
hasCompactCase(123) // false - input is not a string
```

## hasLowerCase

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
检查传入的字符串参数是否包含大写字母，包含大写字母、非字符串返回 false

```ts
import { hasLowerCase } from '@fish/utils'

hasLowerCase('this is lower') // true
hasLowerCase('This is not LOWER') // false
hasLowerCase(123) // false - input is not a string
```

## hasUrlAbsolute

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
检查传入的 URL 字符串参数是否以协议开头来确定它是否是绝对路径，非字符串将返回 false

```ts
import { hasUrlAbsolute } from '@fish/utils'

hasUrlAbsolute("http://example.com/page") // true
hasUrlAbsolute("/page") // false
hasUrlAbsolute(123) // false - input is not a string
```

## toCompactCase

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
从传入字符串参数中删除所有空白字符。

```ts
import { toCompactCase } from '@fish/utils'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```

## toLetters

<span aria-label="in String category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">String</span>
从传入的字符串参数中删除所有非字母字符

```ts
import { toLetters } from '@fish/utils'

toLetters('this is text') // thisistext
toLetters('123-Text!!!') // Text
```

## hasRunningInBrowser

<span aria-label="in Environment category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Environment</span>
检查当前代码是否在浏览器中运行

```ts
import { hasRunningInBrowser } from '@fish/utils'

hasRunningInBrowser() // true
```

## sleep

<span aria-label="in Misc category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Misc</span>
暂停当前函数

```ts
import { sleep } from '@fish/utils'

await sleep(2000) // 暂停 2 秒
await sleep("abc") // 传人非数字的参数，暂停 0 秒
```

## toNumber

<span aria-label="in Number category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Number</span>
将传入的参数作为数字返回，不能转换成数字则返回 0

```ts
import { toNumber } from '@fish/utils'

toNumber('this is text') // 0
toNumber('3') // 3
toNumber(0.4) // 0.4
toNumber(new Set([])) // 0
```

## toOrdinal

<span aria-label="in Number category" role="presentation" style="padding: .25rem .5rem; font-size: .75rem; line-height: 1rem; border-radius: .25rem; color: #fff; background: rgb(86, 114, 205);">Number</span>
如果可能，将数字转换为其序数字符串形式，否则返回第 0 个

```ts
import { toOrdinal } from '@fish/utils'

toOrdinal('this is text') // 0th
toOrdinal('3') // 3rd
toOrdinal('11') // 11th
toOrdinal(3.14) // 3.14th
```